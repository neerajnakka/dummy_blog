import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    // children: [],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
