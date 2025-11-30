import { createBrowserRouter, RouterProvider } from "react-router";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile/Profile";
import JobDescription from "./components/JobsPage/JobDescription";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path:'/jobs',
      element:<Jobs/>
    },
    {
      path:'/description/:id',
      element:<JobDescription/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/profile",
element:<Profile/>
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
