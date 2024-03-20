import Layout from '@/layout';
import Dashboard from '@/pages/dashboard';
import NotFoundPage from '@/pages/error/404';
import Login from '@/pages/login';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import AuthRoute from './authRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: '/sys',
        children: [
          {
            path: '/sys',
            element: <Navigate to="/sys/user" />,
          },
          {
            path: 'user',
            Component: lazy(() => import('@/pages/sys/user')),
          },
          {
            path: 'role',
            Component: lazy(() => import('@/pages/sys/role')),
          },
          {
            path: 'menu',
            Component: lazy(() => import('@/pages/sys/menu')),
          },
        ],
      },
      {
        path: 'list',
        Component: lazy(() => import('@/pages/list')),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
