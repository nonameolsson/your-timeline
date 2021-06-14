import { Dashboard } from 'pages/dashboard'
import { Login } from 'pages/login'
import { NotFound } from 'pages/not-found'

/**
 * Routes that are available without loggin in to the application.
 */
export const PUBLIC_ROUTES = {
  root: {
    path: '/',
    id: 1,
    component: Login,
  },
  notFound: {
    id: 3,
    path: '/*',
    component: NotFound,
  },
}

/**
 * Array created from `PUBLIC_ROUTES`. Can be used to to iterate over routes
 */
export const PUBLIC_ROUTES_ARRAY = Object.values(PUBLIC_ROUTES)

/**
 * Routes that are available without loggin in to the application.
 */
export const PRIVATE_ROUTES = {
  dashboard: {
    id: 2,
    path: '/dashboard',
    component: Dashboard,
  },
}

/**
 * Array created from `PRIVATE_ROUTES`. Can be used to to iterate over routes
 */
export const PRIVATE_ROUTES_ARRAY = Object.values(PRIVATE_ROUTES)
