import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthStateProvider } from 'context'

import { AppRouter } from './pages'

const queryClient = new QueryClient()

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthStateProvider>
        <AppRouter />
      </AuthStateProvider>
    </QueryClientProvider>
  )
}
