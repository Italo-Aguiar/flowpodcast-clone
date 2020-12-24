export interface ValidatorResponse extends ObjectIndex {
  valid: boolean
  message: string
}

export interface ObjectIndex {
  [key:string]: any
}

export interface EpisodeProps {
  mp3: string
  updated_at: string
  bytes: number
  cover: string
  feed: {
    google: string
    apple: string
    youtube: string
    deezer: string
    amazon: string
    spotify: string
  }
  status: boolean
  created_at: string
  id: string
  duration: string
  description: string
  artwork: string
  title: string
}

export interface RewardItem {
  available: boolean
  type: string
  description: string
  modal?: string
}

export interface Reward {
  items: RewardItem[]
  type: string
}

export interface PlanProps {
  updated_at: string
  name: string
  frequency: string
  planId: string
  rewards: Reward[]
  amount: number
  created_at: string
  id: string
}