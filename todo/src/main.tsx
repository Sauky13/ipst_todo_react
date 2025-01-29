import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from './app/providers/ReactQueryProvider';
import { RouterProvider } from './app/providers/RouterProvider';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider />
    </ReactQueryProvider>
  </React.StrictMode>
);
