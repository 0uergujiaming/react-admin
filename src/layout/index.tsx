import LayoutLoading from '@/components/LayoutLoading';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSetting } from '@/store/modules/layout';
import { signOut } from '@/store/modules/user';
import { LogoutOutlined } from '@ant-design/icons';
import { ProLayout, SettingDrawer, ProBreadcrumb } from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import { Suspense } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';
import { useAntdToken } from '@/hooks';

export default () => {
  const { settings } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { menus } = useAppSelector((state) => state.user);

  const location = useLocation();

  const { token } = useAntdToken();

  function onDropdown({ key }: { key: string }) {
    if (key === 'logout') {
      dispatch(signOut());
      navigate('/login', {
        replace: true,
      });
    }
  }

  return (
    <ProLayout
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
      suppressSiderWhenMenuEmpty
      route={{ routes: menus, path: '/' }}
      location={location}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: 'admin',
        render: (props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                  },
                ],
                onClick: onDropdown,
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl) return defaultDom;

        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      {...settings}
      contentStyle={{
        padding: token.paddingLG,
      }}
    >
      <div
        className={css`
          margin-bottom: 10px;
        `}
      >
        <ProBreadcrumb />
      </div>

      <Suspense fallback={<LayoutLoading />}>
        <Outlet />
      </Suspense>

      <SettingDrawer
        hideHintAlert
        hideCopyButton
        enableDarkTheme
        settings={settings}
        onSettingChange={(changeSetting) => {
          dispatch(setSetting(changeSetting));
        }}
      />
    </ProLayout>
  );
};
