import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from '@testing-library/react'

import { Login } from './login'

const queryClient = new QueryClient()
const Wrapper: React.FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

it('renders without crashing', () => {
  const { container } = render(
    <Wrapper>
      <Login />
    </Wrapper>,
  )

  expect(container).toBeDefined()
})
