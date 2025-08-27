import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Problem from "./Components/Problem/Problem";
import AuthProvider from "./Components/providers/AuthProvider";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./Components/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Problem></Problem>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
  {
    path: "/problem",
    element: <Problem></Problem>,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
