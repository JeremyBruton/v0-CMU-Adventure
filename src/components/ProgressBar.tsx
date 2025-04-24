"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  label: string
  value: number
  color: string
}

const ProgressBar = ({ label, value, color }: ProgressBarProps) => {
  // Ensure value is between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100)

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{clampedValue}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${clampedValue}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
