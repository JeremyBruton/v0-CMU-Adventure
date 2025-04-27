"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useGameStore } from "./store/gameStore"
import ProgressBar from "./components/ProgressBar"
import StartScreen from "./components/StartScreen"
import SummaryScreen from "./components/SummaryScreen"
import Cutscene from "./components/Cutscene"
import { storyData } from "./data/story"

function App() {
  const { day, step, stats, selectedChoice, setStats, nextScene, resetGame, isGameOver } = useGameStore()
  const [gameStarted, setGameStarted] = useState(false)
  const [showCutscene, setShowCutscene] = useState<{ show: boolean; image: string; title: string } | null>(null)
  const [cutsceneShown, setCutsceneShown] = useState<Record<string, boolean>>({})

  // Load game state from localStorage on initial render
  useEffect(() => {
    const savedState = localStorage.getItem("cmuAdventureState")
    if (savedState) {
      try {
        const { day, step, stats, gameStarted, cutsceneShown } = JSON.parse(savedState)
        setStats(stats)
        useGameStore.setState({ day, step })
        setGameStarted(gameStarted || false)
        if (cutsceneShown) setCutsceneShown(cutsceneShown)
      } catch (e) {
        console.error("Error parsing saved state:", e)
      }
    }
  }, [setStats])

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "cmuAdventureState",
      JSON.stringify({
        day,
        step,
        stats,
        gameStarted,
        cutsceneShown,
      }),
    )
  }, [day, step, stats, gameStarted, cutsceneShown])

  // Check for cutscene triggers
  useEffect(() => {
    // Helper function to check and show cutscene
    const checkAndShowCutscene = (key: string, image: string, title: string) => {
      if (!cutsceneShown[key]) {
        setShowCutscene({
          show: true,
          image,
          title,
        })
        return true
      }
      return false
    }

    // First cutscene - after starting the game
    if (gameStarted && day === "MONDAY" && step === 0 && !showCutscene) {
      const key = "monday-morning"
      if (checkAndShowCutscene(key, "/images/dorm-room.png", "Monday Morning - Finals Week Begins")) {
        setCutsceneShown((prev) => ({ ...prev, [key]: true }))
      }
    }
    // Tuesday after calculus exam
    else if (day === "TUESDAY" && step === 1 && !showCutscene && !selectedChoice) {
      const key = "tuesday-exam"
      if (checkAndShowCutscene(key, "/images/calculus-exam.png", "Calculus Exam - Baker Hall")) {
        setCutsceneShown((prev) => ({ ...prev, [key]: true }))
      }
    }
    // After CS project submission
    else if (day === "WEDNESDAY" && step === 2 && !showCutscene && !selectedChoice) {
      const key = "cs-project"
      if (checkAndShowCutscene(key, "/images/cs-project.png", "CS Project Submitted!")) {
        setCutsceneShown((prev) => ({ ...prev, [key]: true }))
      }
    }
    // Thursday night
    else if (day === "THURSDAY" && step === 2 && !showCutscene && !selectedChoice) {
      const key = "thursday-night"
      if (checkAndShowCutscene(key, "/images/night-campus.png", "Night Falls Over Campus")) {
        setCutsceneShown((prev) => ({ ...prev, [key]: true }))
      }
    }
  }, [day, step, gameStarted, showCutscene, selectedChoice, cutsceneShown])

  // Get current scene based on day and step
  const currentScene = storyData[day]?.[step]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  }

  const handleStartGame = () => {
    resetGame()
    setGameStarted(true)
    // Reset cutscene tracking when starting a new game
    setCutsceneShown({})
  }

  const handleCloseCutscene = () => {
    setShowCutscene(null)
  }

  if (!gameStarted) {
    return <StartScreen onStartGame={handleStartGame} initialStats={stats} />
  }

  if (isGameOver) {
    return (
      <SummaryScreen
        stats={stats}
        onRestart={() => {
          resetGame()
          setGameStarted(false)
          setCutsceneShown({})
        }}
      />
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Finals Week at CMU: A Choose-Your-Path Adventure
          </h1>

          {/* Stats Section */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            <ProgressBar label="Energy" value={stats.energy} color="bg-green-500" />
            <ProgressBar label="Stress" value={stats.stress} color="bg-red-500" />
            <ProgressBar label="Preparedness" value={stats.prepared} color="bg-blue-500" />
            <ProgressBar label="Happiness" value={stats.happiness} color="bg-yellow-500" />
          </div>

          {/* Day Display */}
          <div className="mb-4 text-center">
            <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
              {day}
            </span>
          </div>

          {/* Scene Content */}
          <AnimatePresence mode="wait">
            {currentScene && (
              <motion.div
                key={`${day}-${step}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mb-6"
              >
                <motion.div variants={contentVariants}>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{currentScene.text}</p>

                  <div className="space-y-3">
                    {currentScene.choices.map((choice, index) => (
                      <button
                        key={index}
                        onClick={() => nextScene(choice)}
                        disabled={selectedChoice !== null}
                        className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                          selectedChoice === index
                            ? "bg-blue-100 dark:bg-blue-900 border-blue-500 border"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        <span className="font-medium mr-2">{choice.label}.</span>
                        {choice.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Cutscene Overlay */}
      <AnimatePresence>
        {showCutscene && showCutscene.show && (
          <Cutscene imageSrc={showCutscene.image} title={showCutscene.title} onContinue={handleCloseCutscene} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
