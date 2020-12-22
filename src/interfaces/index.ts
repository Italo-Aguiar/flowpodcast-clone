export interface ValidatorResponse extends ObjectIndex {
  valid: boolean
  message: string
}

export interface ObjectIndex {
  [key:string]: any
}

export interface Episode {
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