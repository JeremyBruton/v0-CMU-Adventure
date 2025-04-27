"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CutsceneProps {
  imageSrc: string
  title: string
  onContinue: () => void
}

const Cutscene = ({ imageSrc, title, onContinue }: CutsceneProps) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        </div>

        <div className="p-6 bg-gradient-to-t from-gray-900 to-gray-900/80 -mt-16 relative">
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

          <button
            onClick={onContinue}
            className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded transition-colors duration-200"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Cutscene
