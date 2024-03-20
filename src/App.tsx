import { Suspense, useEffect } from 'react';
import LayoutLoading from './components/LayoutLoading';
import { ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/authDemo';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setMenus } from './store/modules/user';
import { getMenus } from './api/user';

function App() {
  const { settings } = useAppSelector((state) => state.layout);
  const { role, menus } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!menus.length && role) {
      getMenus().then((res) => {
        dispatch(setMenus(res));
      });
    }
  }, [role]);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm:
            settings.navTheme === 'realDark'
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
          cssVar: true,
          hashed: false,
          token: {
            colorPrimary: settings.colorPrimary,
          },
        }}
      >
        <Suspense fallback={<LayoutLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </>
  );
}

export default App;
