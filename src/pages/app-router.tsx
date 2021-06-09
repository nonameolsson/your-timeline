import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Dashboard } from './dashboard'
import { Start } from './start'

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
