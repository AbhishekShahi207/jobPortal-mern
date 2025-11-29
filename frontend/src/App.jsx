import { createBrowserRouter, RouterProvider } from "react-router";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

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
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
