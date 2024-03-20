import { createSlice } from '@reduxjs/toolkit';
import type { ProSettings } from '@ant-design/pro-components';

export interface LayoutState {
  settings: ProSettings;
}

const state = localStorage.getItem('layout-settings');

const initialState: LayoutState = {
  settings: state
    ? JSON.parse(state)
    : {
      colorPrimary: '#1890ff',
        fixSiderbar: true,
        layout: 'mix',
        siderMenuType: 'group',
      },
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setSetting: (state, action) => {
      state.settings = action.payload;
      localStorage.setItem('layout-settings', JSON.stringify(action.payload));
    },
  },
});

export const { setSetting } = layoutSlice.actions;

export default layoutSlice.reducer;
