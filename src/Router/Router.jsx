import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Transaction from "../Pages/Transaction"
import Dashboard from "../Pages/Dashboard";




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
      }
    ],
  },
]);
