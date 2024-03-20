import { RouteObject } from 'react-router-dom'
import Login from '../pages/login'
import NotFoundPage from '../pages/error/404'
import Dashboard from '../pages/dashboard'

export const routeList: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  
]

export const errorRouteList:RouteObject[] = [
  {
    path: '*',
    element: <NotFoundPage />,
  },
]
