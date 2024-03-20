export interface LoginState{
  status?: 'ok' | 'error';
  message?: string;
}

export interface LoginForm {
  username: string;
  password: string;
  autoLogin: boolean;
}


export interface Menu {
  path: string
  comp: string
}
