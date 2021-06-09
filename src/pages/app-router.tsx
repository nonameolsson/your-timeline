import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Dashboard } from './dashboard'
import { LoginPage } from './login-page'

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
