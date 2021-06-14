import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { AuthStateContextType } from './authStateContext.d'
import { User } from './types'

let logoutTimer: NodeJS.Timeout

/**
 * Contains the authentication jwt and user details
 */
const AuthStateContext = createContext<AuthStateContextType>({
  logIn: () => undefined,
  logOut: () => undefined,
  user: null,
  jwt: null,
})

export function useAuthState(): AuthStateContextType {
  const context = useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

export const AuthStateProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<null | User>(null)
  const [jwt, setJwt] = useState<null | string>(null)
  const [tokenExpirationTime, setJwtExpirationTime] = useState<null | Date>(null)

  const logIn = useCallback(({ user, jwt }: { user: User; jwt: string }) => {
    setUser(user)
    setJwt(jwt)

    const expiration = new Date(new Date().getTime() + 1000 * 60 * 60)
    setJwtExpirationTime(expiration) //set expiration time one hour from current time

    localStorage.setItem(
      'userData',
      JSON.stringify({
        jwt,
        expirationTime: expiration.toISOString(),
      }),
    )
  }, [])

  const logOut = useCallback(() => {
    setUser(null)
    setJwt(null)
    setJwtExpirationTime(null)
    localStorage.removeItem('userData')
  }, [])

  const refreshToken = (jwt: string, expirationTime: Date) => {
    setJwt(jwt)
    const expiration = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60)

    setJwtExpirationTime(expiration)

    localStorage.setItem(
      'userData',
      JSON.stringify({
        jwt,
        expirationTime: expiration.toISOString(),
      }),
    )
  }

  useEffect(() => {
    const storedData: string | null = localStorage.getItem('userData')
    const parsedData = storedData !== null ? JSON.parse(storedData) : null

    if (parsedData?.jwt && new Date(parsedData.expirationTime) > new Date()) {
      refreshToken(parsedData.jwt, new Date(parsedData.expirationTime))
    }
  }, [logIn])

  //new useEffect hook to set the timer if the expiration time is in future otherwise we clear the timer here
  useEffect(() => {
    if (jwt && tokenExpirationTime) {
      const remainingTime = tokenExpirationTime.getTime() - new Date().getTime()
      logoutTimer = setTimeout(logOut, remainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [jwt, logOut, tokenExpirationTime])

  return <AuthStateContext.Provider value={{ user, logIn, logOut, jwt }}>{children}</AuthStateContext.Provider>
}
