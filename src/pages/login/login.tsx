import { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Auth } from 'api/api'
import { AuthResponse, Credentials, useAuthState } from 'context'

import { PRIVATE_ROUTES } from 'config'

const login = async (credentials: Credentials): Promise<AuthResponse> => {
  return Auth.postLogin(credentials)
}

export const Login = (): JSX.Element => {
  const history = useHistory()
  const authState = useAuthState()

  const { mutate, isLoading, error } = useMutation<AuthResponse, unknown, Credentials>(data => login(data), {
    onSuccess: data => {
      authState.logIn({ user: data.user, jwt: data.jwt })
      history.push(PRIVATE_ROUTES.dashboard.path)
    },
    onError: () => {
      console.error('error!')
    },
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault()

    mutate({ identifier: email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            alt="Workflow"
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        {error && <p className="text-red-500">Error!</p>}
        <form className="mt-8 space-y-6">
          <input defaultValue="true" name="remember" type="hidden" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                required
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                required
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                id="remember_me"
                name="remember_me"
                type="checkbox"
              />
              <label className="ml-2 block text-sm text-gray-900" htmlFor="remember_me">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-200"
              disabled={isLoading}
              type="submit"
              onClick={handleLogin}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon aria-hidden="true" className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
