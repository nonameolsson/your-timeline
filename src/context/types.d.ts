export interface Role {
  id: number
  name: 'Authenticated'
  type: 'authenticated'
}

export interface Timeline {
  id: number
}

export interface User {
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

export interface State {
  user: string | User
  jwt: string
  loading: boolean
  errorMessage: null | Error
}

export interface AuthResponse {
  jwt: string
  user: User
}

export interface Credentials {
  identifier: string
  password: string
}
