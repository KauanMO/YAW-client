import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Index';
import './GlobalStyle.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './pages/admin/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />
  }
])

root.render(
  <RouterProvider router={router} />
);
