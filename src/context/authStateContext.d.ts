import { User } from './types'

export interface AuthStateContextType {
  jwt: string | null

  /**
   * Object containing current user
   */
  user: User | null

  logIn: ({ user, jwt }: { user: User; jwt: string }) => void

  logOut: () => void
}
