import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { useAuthState } from 'context'

import { PRIVATE_ROUTES, PRIVATE_ROUTES_ARRAY, PUBLIC_ROUTES } from 'config'

export const AppRouter = (): JSX.Element => {
  const authState = useAuthState()

  const redirectToDashboard = (): JSX.Element => {
    return <Redirect to={PRIVATE_ROUTES.dashboard.path} />
  }

  if (!authState.jwt) {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={PUBLIC_ROUTES.root.component} exact={true} path={PUBLIC_ROUTES.root.path} />
          <Route component={PUBLIC_ROUTES.notFound.component} exact={true} path={PUBLIC_ROUTES.notFound.path} />
        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={PUBLIC_ROUTES.root.path} render={redirectToDashboard} />
        {PRIVATE_ROUTES_ARRAY.map(route => (
          <Route key={route.path} component={route.component} exact={true} path={route.path} />
        ))}
        <Route component={PUBLIC_ROUTES.notFound.component} path={PUBLIC_ROUTES.notFound.path} />
      </Switch>
    </BrowserRouter>
  )
}
