// import React from 'react'
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useNavigate } from "react-router";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AdminJobsTable from "./AdminJobsTable";

import { setSearchJobByText } from "../../redux/jobSlice";
import useGetAllAdminJobs from "../../hooks/useGetAllAdminJobs";


const AdminJobs = () => {
useGetAllAdminJobs()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");


  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <Input
            className="w-fit "
            placeholder="Filter by name or role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            Post New Job
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
