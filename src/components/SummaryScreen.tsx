"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Stats } from "../types"
import ProgressBar from "./ProgressBar"

interface SummaryScreenProps {
  stats: Stats
  onRestart: () => void
}

const SummaryScreen = ({ stats, onRestart }: SummaryScreenProps) => {
  // Determine the dominant stat
  const statEntries = Object.entries(stats) as [keyof Stats, number][]
  const dominantStat = statEntries.reduce((a, b) => (a[1] > b[1] ? a : b))

  // Get message based on dominant stat
  const getMessage = () => {
    switch (dominantStat[0]) {
      case "energy":
        return "You finished finals week with plenty of energy to spare! While you might not have been the most prepared, your vitality carried you through."
      case "stress":
        return "Finals week took its toll on you. Your stress levels peaked, affecting your performance and wellbeing. Remember to take care of yourself next time!"
      case "prepared":
        return "Your dedication to studying paid off! You were extremely well-prepared for your exams, though perhaps at the cost of some happiness and energy."
      case "happiness":
        return "You prioritized your happiness during finals week. While your academic preparation might have suffered, your mental health remained strong!"
      default:
        return "You made it through finals week with a balanced approach. Not too stressed, not too prepared, but you survived!"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image src="/images/celebration.png" alt="Finals Week Complete" fill className="object-cover" />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Finals Week Complete!</h1>

          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{getMessage()}</p>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Final Stats</h2>

          <div className="grid grid-cols-1 gap-3 mb-8">
            <ProgressBar label="Energy" value={stats.energy} color="bg-green-500" />
            <ProgressBar label="Stress" value={stats.stress} color="bg-red-500" />
            <ProgressBar label="Preparedness" value={stats.prepared} color="bg-blue-500" />
            <ProgressBar label="Happiness" value={stats.happiness} color="bg-yellow-500" />
          </div>

          <div className="text-center">
            <button
              onClick={onRestart}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Restart Adventure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SummaryScreen
