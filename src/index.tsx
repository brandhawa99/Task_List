import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './pages/LandingPage/LandingPage';
import { createBrowserRouter, RouterProvider,Route, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route element={<App />}>
      <Route path='/' element={<LandingPage />} />
    </Route>
    <Route path="/login" element={<Login/>}/>

  </Route>
  )
  
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
