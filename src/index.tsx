import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Index';
import './GlobalStyle.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Login />
);
