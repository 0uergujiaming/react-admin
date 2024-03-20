import { useAppDispatch } from '@/store/hooks';
import { signIn } from '@/store/modules/user';
import { LoginForm, LoginState } from '@/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const [userLoginState, setUserLoginState] = useState<LoginState>({});
  const { status, message } = userLoginState;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function login(form: LoginForm) {
    const { username, password } = form;
    if (password !== '123456') {
      setUserLoginState({
        status: 'error',
        message: '用户名或密码错误',
      });
      return;
    }
    setUserLoginState({
      status: 'ok',
      message: '登录成功',
    });
    dispatch(signIn(form));
    navigate('/');
  }

  return {
    status,
    message,
    login,
  };
}
