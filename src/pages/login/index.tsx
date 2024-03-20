import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, theme } from 'antd';
import React, { useEffect } from 'react';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { LoginForm as LoginFormType } from '@/types';
import { useLogin } from './hooks';
import { css } from '@emotion/css';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const { status, message, login } = useLogin();
  const { token } = theme.useToken();

  return (
    <div
      className={css`
        background: ${token.colorBgLayout};
        color: ${token.colorText};
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>
        <LoginForm
          title="Admin"
          subTitle=" "
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values: LoginFormType) => {
            await login(values);
          }}
          message={status === 'error' && <LoginMessage content={message!} />}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
