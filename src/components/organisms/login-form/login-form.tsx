import { MouseEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LockClosedIcon } from '@heroicons/react/solid'

import { Button } from '../../atoms'
import { TextInput } from '../../molecules'

import { StyledForm } from './login-form.styled'
import { LoginFormProps } from './login-form.types'

export const LoginForm = ({ error, onSubmit, isLoading }: LoginFormProps): JSX.Element => {
  const { t } = useTranslation('common')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault()
    onSubmit(email, password)
  }

  return (
    <StyledForm>
      <TextInput
        autoComplete="email"
        label={t('email')}
        name="email"
        placeholder="my@email.com"
        required={true}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput
        autoComplete="current-password"
        hidden={true}
        label={t('password')}
        name="email"
        placeholder="Password"
        required={true}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{t('somethingWentWrong')}</p>}
      <Button disabled={isLoading} type="submit" onClick={handleClick}>
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon aria-hidden="true" className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
        </span>
        {t('login')}
      </Button>
    </StyledForm>
  )
}
