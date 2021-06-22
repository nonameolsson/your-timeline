import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'

import { LoginForm } from './login-form'

function onSubmit(email: string, password: string): Promise<void> {
  // eslint-disable-next-line no-console
  return new Promise((resolve, reject) => console.log(email, password))
}

describe('Login form', function () {
  it('should find the login form input via testID', () => {
    const testID = 'login-form'

    render(<LoginForm error={false} isLoading={false} onSubmit={onSubmit} />)

    const foundForm = screen.getByTestId(testID)

    expect(foundForm).toBeTruthy()
  })

  it('should have email and password input fields', () => {
    render(<LoginForm error={false} isLoading={false} onSubmit={onSubmit} />)

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Password')

    expect(emailInput).toBeDefined()
    expect(passwordInput).toBeDefined()
  })

  it('should update email and password values', () => {
    render(<LoginForm error={false} isLoading={false} onSubmit={onSubmit} />)

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Password')
    userEvent.type(emailInput, 'my@email.com')
    expect(emailInput).toHaveValue('my@email.com')

    userEvent.type(passwordInput, 'myawesomepassword')
    expect(passwordInput).toHaveValue('myawesomepassword')
  })
})
