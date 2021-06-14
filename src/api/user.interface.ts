export interface Role {
  id: number
  name: 'Authenticated'
  type: 'authenticated'
}

export interface Timeline {
  id: number
}

export interface UserType {
  id: number
  username: string
  email: string
  provider: 'local'
  confirmed: boolean
  created_at: string
  role: Role
  timelines: Timeline[]
  updated_at: string
}
