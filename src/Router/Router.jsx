import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Transaction from "../Pages/Transaction"
import Dashboard from "../Pages/Dashboard";
import Reports from "../Pages/Reports";
import Goals from "../Pages/Goals";
import Settings from "../Pages/Settings";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path:"/transactions",
        element:<Transaction></Transaction>
      },
      {
        path:"/reports",
        element:<Reports></Reports>
      },
      {
        path:"/goals",
        element:<Goals></Goals>
      },
      {
        path:"/settings",
        element:<Settings></Settings>
      }
    ],
  },
]);
