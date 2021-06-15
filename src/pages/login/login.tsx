import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { Auth } from 'api/api'
import { AuthResponse, Credentials, useAuthState } from 'context'

import { PRIVATE_ROUTES } from 'config'

import { LoginForm } from '../../components/organisms'

const login = async (credentials: Credentials): Promise<AuthResponse> => {
  return Auth.postLogin(credentials)
}

export const Login = (): JSX.Element => {
  const history = useHistory()
  const authState = useAuthState()

  const { mutate, isLoading, isError } = useMutation<AuthResponse, unknown, Credentials>(data => login(data), {
    onSuccess: data => {
      authState.logIn({ user: data.user, jwt: data.jwt })
      history.push(PRIVATE_ROUTES.dashboard.path)
    },
    onError: () => {
      console.error('error!')
    },
  })

  async function handleLogin(email: string, password: string): Promise<void> {
    await mutate({ identifier: email, password })
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
          <LoginForm error={isError} isLoading={isLoading} onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  )
}
