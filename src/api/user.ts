const defaultMenus = [
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/sys',
    name: '系统管理',
    children: [
      {
        path: '/sys/user',
        name: '用户管理',
      },
      {
        path: '/sys/role',
        name: '角色管理',
      },
      {
        path: '/sys/menu',
        name: '菜单管理',
      },
    ],
  },
  {
    path: '/list',
    name: '录屏管理',
  },
];

export const getMenus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultMenus);
    }, 1000);
  });
};
