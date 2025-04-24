"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import type { Stats } from "../types"

interface StartScreenProps {
  onStartGame: () => void
  initialStats: Stats
}

const StartScreen = ({ onStartGame, initialStats }: StartScreenProps) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Image and Title */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-screen">
        <Image src="/images/finals-week-bg.png" alt="Finals Week at CMU" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 md:bg-gradient-to-r md:from-transparent md:to-gray-900" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-serif"
          >
            Finals Week
            <br />
            <span className="text-3xl md:text-4xl">at CMU</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white text-lg mt-2 max-w-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
          >
            A Choose-Your-Path Adventure
          </motion.p>
        </div>
      </div>

      {/* Right side - Game options */}
      <div className="w-full md:w-1/2 bg-gray-900 p-6 md:p-10 flex flex-col">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Start new game</h2>
            <p className="text-gray-300 mb-6">
              Navigate the challenges of finals week at Carnegie Mellon University. Your choices will shape your
              destiny...
            </p>
            <button
              onClick={onStartGame}
              className="w-full md:w-48 bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              <span>Begin Adventure</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="text-amber-300 hover:text-amber-200 font-medium mb-4 flex items-center"
            >
              <span>{showInfo ? "Hide" : "Show"} starting stats</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-2 transition-transform duration-200 ${showInfo ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg p-4 mb-6"
              >
                <h3 className="text-white font-medium mb-3">Starting Stats</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Energy</span>
                      <span className="text-sm font-medium text-gray-300">{initialStats.energy}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${initialStats.energy}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Stress</span>
                      <span className="text-sm font-medium text-gray-300">{initialStats.stress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${initialStats.stress}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Preparedness</span>
                      <span className="text-sm font-medium text-gray-300">{initialStats.prepared}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${initialStats.prepared}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Happiness</span>
                      <span className="text-sm font-medium text-gray-300">{initialStats.happiness}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-yellow-500 h-2.5 rounded-full"
                        style={{ width: `${initialStats.happiness}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 bg-amber-100/10 rounded-lg p-5 border border-amber-200/20"
          >
            <h3 className="text-amber-200 font-medium mb-2">The Challenge Awaits</h3>
            <p className="text-gray-300 text-sm">
              You're standing at the gates of Carnegie Mellon. Finals Week begins. Your choices will shape your
              destiny...
              <br />
              <br />
              Will you prioritize studying, socializing, or self-care? Each decision affects your Energy, Stress,
              Preparedness, and Happiness.
              <br />
              <br />
              Can you survive Finals Week with your sanity intact?
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-auto pt-4 text-center text-gray-500 text-xs"
        >
          © {new Date().getFullYear()} Finals Week at CMU: A Choose-Your-Path Adventure
        </motion.div>
      </div>
    </div>
  )
}

export default StartScreen
