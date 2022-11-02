import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './pages/LandingPage/LandingPage';
import { createBrowserRouter, RouterProvider,Route, createRoutesFromElements } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import LoginPage from './pages/LoginPage/LoginPage'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route element={<App />}>
      <Route path='/' element={<LandingPage />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Route>
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
