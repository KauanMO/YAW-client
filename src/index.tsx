import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Index';
import './GlobalStyle.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './pages/admin/Index';
import Pedidos from './pages/pedidos/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pedidos />,
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/login',
    element: <Login />
  }
])

root.render(
  <RouterProvider router={router} />
);
