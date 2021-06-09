import { QueryClient, QueryClientProvider } from 'react-query'

import { AppRouter } from './pages/app-router'

const queryClient = new QueryClient()

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}
