import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from '@testing-library/react'

import { Dashboard } from './dashboard'

const queryClient = new QueryClient()
const Wrapper: React.FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

it('renders without crashing', () => {
  const { container } = render(
    <Wrapper>
      <Dashboard />
    </Wrapper>,
  )

  expect(container).toBeDefined()
})
