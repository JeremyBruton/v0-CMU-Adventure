export interface Stats {
  energy: number
  stress: number
  prepared: number
  happiness: number
}

export interface Choice {
  id: number
  label: string
  text: string
  effects: Partial<Stats>
}

export interface Scene {
  text: string
  choices: Choice[]
}

export interface StoryData {
  [day: string]: {
    [step: number]: Scene
  }
}
