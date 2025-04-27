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
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)
  const [showContinuePrompt, setShowContinuePrompt] = useState(false)

  // Check for URL parameters on initial load
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const resetParam = queryParams.get("reset")

    if (resetParam === "true") {
      // Clear localStorage and reset the game
      localStorage.removeItem("cmuAdventureState")
      resetGame()
      setGameStarted(false)
      setCutsceneShown({})
      setInitialLoadComplete(true)
      return
    }

    // Load game state from localStorage on initial render
    const savedState = localStorage.getItem("cmuAdventureState")
    if (savedState) {
      try {
        const { day, step, stats, gameStarted, cutsceneShown } = JSON.parse(savedState)

        // If there's a saved game, show the continue prompt instead of auto-loading
        if (gameStarted) {
          setShowContinuePrompt(true)
          // Store the saved state temporarily without applying it yet
          window.tempSavedState = { day, step, stats, cutsceneShown }
        }
      } catch (e) {
        console.error("Error parsing saved state:", e)
      }
    }

    setInitialLoadComplete(true)
  }, [resetGame])

  // Function to continue the saved game
  const continueSavedGame = () => {
    if (window.tempSavedState) {
      const { day, step, stats, cutsceneShown } = window.tempSavedState
      setStats(stats)
      useGameStore.setState({ day, step })
      setGameStarted(true)
      if (cutsceneShown) setCutsceneShown(cutsceneShown)
      setShowContinuePrompt(false)
      // Clear the temp state
      window.tempSavedState = null
    }
  }

  // Function to start a new game
  const startNewGame = () => {
    resetGame()
    setGameStarted(true)
    setCutsceneShown({})
    setShowContinuePrompt(false)
  }

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    if (initialLoadComplete) {
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
    }
  }, [day, step, stats, gameStarted, cutsceneShown, initialLoadComplete])

  // Check for cutscene triggers
  useEffect(() => {
    if (!initialLoadComplete) return

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
  }, [day, step, gameStarted, showCutscene, selectedChoice, cutsceneShown, initialLoadComplete])

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

  const handleCloseCutscene = () => {
    setShowCutscene(null)
  }

  // Show loading state while initial check is happening
  if (!initialLoadComplete) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    )
  }

  // Show continue prompt if there's a saved game
  if (showContinuePrompt) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Continue Your Adventure?</h2>
          <p className="text-gray-300 mb-6">
            We found a saved game. Would you like to continue where you left off or start a new adventure?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={continueSavedGame}
              className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Continue
            </button>
            <button
              onClick={startNewGame}
              className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!gameStarted) {
    return <StartScreen onStartGame={startNewGame} initialStats={stats} />
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

          {/* Reset Game Link */}
          <div className="text-center mb-4">
            <button
              onClick={() => {
                if (confirm("Are you sure you want to reset the game? All progress will be lost.")) {
                  resetGame()
                  setGameStarted(false)
                  setCutsceneShown({})
                }
              }}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 underline"
            >
              Reset Game
            </button>
          </div>

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

// Add the tempSavedState property to the window object
declare global {
  interface Window {
    tempSavedState: any
  }
}

export default App
