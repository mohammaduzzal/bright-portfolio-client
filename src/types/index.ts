export interface IBlog {
  id: number
  title: string
  content: string
  thumbnail: string
  isFeatured: boolean
  tags: string[]
  views: number
  createdAt: string
  updatedAt: string
}


export interface IProject {
  id: number
  name: string
  image: string
  description: string
  techStack: string[]
  liveLink: string
  githubLink: string[]
  challenges: string
  futureImprovements: string
  createdAt: string
  updatedAt: string
}