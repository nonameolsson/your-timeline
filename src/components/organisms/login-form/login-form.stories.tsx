import { Meta } from '@storybook/react'

import { LoginForm } from './login-form'

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as Meta

export const Default: React.FC = () => {
  function onSubmit(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => undefined)
  }

  return <LoginForm error={false} isLoading={false} onSubmit={onSubmit} />
}
