import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'antd/dist/reset.css';
import './index.css';
import store from '@/store';
import { Provider } from 'react-redux';
// import { ThemeProvider } from './layout/theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
);
