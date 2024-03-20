import { Menu } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  role: string;
  menus: Menu[];
}

const initialState: UserState = {
  role: localStorage.getItem('role') || '',
  menus: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.role = action.payload.username === 'admin' ? 'admin' : 'user';
      localStorage.setItem('role', state.role);
    },
    signOut: (state) => {
      state.role = '';
      state.menus = [];
      localStorage.removeItem('role');
    },
    setMenus: (state: UserState, action) => {
      state.menus = action.payload;
    },
  },
});

export const { signIn, setMenus, signOut } = userSlice.actions;

export default userSlice.reducer;
