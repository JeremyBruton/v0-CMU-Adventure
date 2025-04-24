"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useGameStore } from "./store/gameStore"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import StartScreen from "./components/StartScreen"
import SummaryScreen from "./components/SummaryScreen"
import { storyData } from "./data/story"

function App() {
  const { day, step, stats, selectedChoice, setStats, nextScene, resetGame, isGameOver } = useGameStore()
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    const savedState = localStorage.getItem("cmuAdventureState")
    if (savedState) {
      const { day, step, stats, gameStarted } = JSON.parse(savedState)
      setStats(stats)
      useGameStore.setState({ day, step })
      setGameStarted(gameStarted || false)
    }
  }, [setStats])

  useEffect(() => {
    localStorage.setItem("cmuAdventureState", JSON.stringify({ day, step, stats, gameStarted }))
  }, [day, step, stats, gameStarted])

  const currentScene = storyData[day]?.[step]

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
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 text-foreground">
      <Card className="max-w-xl mx-auto mt-8">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold text-center">
            Finals Week at CMU: A Choose-Your-Path Adventure
          </h1>

          {/* Stats Section */}
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: "Energy", value: stats.energy },
              { label: "Stress", value: stats.stress },
              { label: "Preparedness", value: stats.prepared },
              { label: "Happiness", value: stats.happiness },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-sm font-medium mb-1">{label}</p>
                <Progress value={value} />
              </div>
            ))}
          </div>

          {/* Day Display */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
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
              >
                <motion.div variants={contentVariants}>
                  <p className="mb-6 leading-relaxed">{currentScene.text}</p>

                  <div className="space-y-3">
                    {currentScene.choices.map((choice, index) => (
                      <Button
                        key={index}
                        variant={selectedChoice === index ? "outline" : "ghost"}
                        onClick={() => nextScene(choice)}
                        disabled={selectedChoice !== null}
                        className="w-full text-left justify-start"
                      >
                        <span className="font-medium mr-2">{choice.label}.</span>
                        {choice.text}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
