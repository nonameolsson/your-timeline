import { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Auth } from 'api/api'
import { AuthResponse, Credentials, useAuthState } from 'context'

import { Button, Input, Label } from 'components/atoms'
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
              <Label htmlFor="email-address">Email address</Label>
              <Input
                required
                autoComplete="email"
                id="email-address"
                name="email"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>

              <Input
                required
                autoComplete="current-password"
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
            <Button disabled={isLoading} type="submit" onClick={handleLogin}>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon aria-hidden="true" className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              </span>
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
