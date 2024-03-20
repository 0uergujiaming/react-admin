import { lazy, useEffect, useState } from 'react';
import { routeList, errorRouteList } from './index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from '@/types';
import { useAppSelector } from '@/store/hooks';

let modulesCache: Record<string, any> | null = null;

function mapRoutes(routes: Menu[]) {
  if (!modulesCache) {
    modulesCache = import.meta.glob('../pages/**/*.tsx');
  }
  return routes.map((route) => {
    return {
      path: route.path,
      Component: lazy(modulesCache![`../pages/${route.comp}/index.tsx`]),
    };
  });
}

function AsyncRouter() {
  const [routes, setRoutes] = useState([...routeList, ...errorRouteList]);
  const menus = useAppSelector((state) => state.user.menus);

  useEffect(() => {
    setRoutes([...routeList, ...mapRoutes(menus), ...errorRouteList]);
  }, [menus]);

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default AsyncRouter;
