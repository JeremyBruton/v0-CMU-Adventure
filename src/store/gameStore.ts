import { create } from "zustand"
import type { Choice, Stats } from "../types"

interface GameState {
  day: string
  step: number
  stats: Stats
  selectedChoice: number | null
  isGameOver: boolean
  setStats: (stats: Stats) => void
  nextScene: (choice: Choice) => void
  resetGame: () => void
}

// Initial stats as specified
const initialStats: Stats = {
  energy: 80,
  stress: 30,
  prepared: 40,
  happiness: 60,
}

export const useGameStore = create<GameState>((set, get) => ({
  day: "MONDAY",
  step: 0,
  stats: { ...initialStats },
  selectedChoice: null,
  isGameOver: false,

  setStats: (stats) => set({ stats }),

  nextScene: (choice) => {
    const { day, step, stats } = get()

    // Apply stat changes
    const newStats = { ...stats }

    if (choice.effects) {
      Object.entries(choice.effects).forEach(([stat, value]) => {
        const statKey = stat as keyof Stats
        newStats[statKey] = Math.min(Math.max(newStats[statKey] + value, 0), 100)
      })
    }

    // Mark this choice as selected
    set({ selectedChoice: choice.id })

    // Wait a moment before moving to the next scene
    setTimeout(() => {
      // Determine next scene
      const daysOrder = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]
      const currentDayIndex = daysOrder.indexOf(day)

      // If we're at the last step of the day
      if (step === 2) {
        // If it's Friday and the last step, game over
        if (day === "FRIDAY") {
          set({
            isGameOver: true,
            stats: newStats,
          })
          return
        }

        // Otherwise, move to the next day
        const nextDay = daysOrder[currentDayIndex + 1]
        set({
          day: nextDay,
          step: 0,
          stats: newStats,
          selectedChoice: null,
        })
      } else {
        // Move to the next step of the current day
        set({
          step: step + 1,
          stats: newStats,
          selectedChoice: null,
        })
      }
    }, 1000)
  },

  resetGame: () =>
    set({
      day: "MONDAY",
      step: 0,
      stats: { ...initialStats },
      selectedChoice: null,
      isGameOver: false,
    }),
}))
