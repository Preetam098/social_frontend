import { lazy } from "react";

const Login = lazy(() => import("../Pages/Login"));
// import Login from '../Pages/Login'
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Friends = lazy(() => import("../Pages/Friends"));
const Signup = lazy(() => import("../Pages/Signup"));
const Profile = lazy(() => import("../Pages/Profile"));

const AllRoutes = [
  {
    name: "Login",
    path: "/",
    exact: true,
    element: <Login />,
    private: false,
  },
  {
    name: "Signup",
    path: "/signup",
    exact: true,
    element: <Signup />,
    private: false,
  },

  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    private: true,
  },
  {
    name: "Friends",
    path: "/friends",
    element: <Friends />,
    private: true,
  },

  {
    name: "Signup",
    path: "/signup",
    element: <Signup />,
    private: true,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <Profile />,
    private: true,
  },
];

export default AllRoutes;
