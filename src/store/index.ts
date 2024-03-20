import { configureStore } from '@reduxjs/toolkit';

import UserReducer from './modules/user';
import LayoutSlice from './modules/layout';

const store = configureStore({
  reducer: {
    user: UserReducer,
    layout: LayoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
