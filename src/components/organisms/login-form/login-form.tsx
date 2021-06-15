import { MouseEvent, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'

import { Button } from '../../atoms'
import { TextInput } from '../../molecules'

import { StyledForm } from './login-form.styled'
import { LoginFormProps } from './login-form.types'

export const LoginForm = ({ error, onSubmit, isLoading }: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onSubmit(email, password)
  }

  return (
    <StyledForm>
      <TextInput
        autoComplete="email"
        label="E-mail address"
        name="email"
        placeholder="E-mail address"
        required={true}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput
        autoComplete="current-password"
        hidden={true}
        label="Password"
        name="email"
        placeholder="Password"
        required={true}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">Something went wrong</p>}
      <Button disabled={isLoading} type="submit" onClick={handleClick}>
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon aria-hidden="true" className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
        </span>
        Sign in
      </Button>
    </StyledForm>
  )
}
