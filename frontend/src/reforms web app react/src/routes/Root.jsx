import Dashboard from '../components/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

import {
    createBrowserRouter
  } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
    
  ]);