import { createBrowserRouter, RouterProvider } from "react-router";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile/Profile";
import JobDescription from "./components/JobsPage/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/companyCreate";
import Companysetup from "./components/admin/Companysetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";

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
    },
    ///for admin company
    {
      path:"/admin/Companies",
      element:<Companies/>
    },
    {
      path:"admin/companies/create",
      element:<CompanyCreate/>
    },
    {
      path:"admin/companies/:id",
      element:<Companysetup/>
    },
    //for adminn jobas
    {
      path:"admin/jobs",
      element:<AdminJobs/>
    },
    {
      path:"admin/jobs/create",
      element:<PostJob/>
    },
    {
      path:"admin/jobs/:id/applicants",
      element:<Applicants
      />
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
