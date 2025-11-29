import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./JobsPage/FilterCard";
import Job from "./JobsPage/Job";

const jobsArray = [1,2,3,455,7,8,3,64,6,];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
     <div className="flex gap-5 ">
      <div className="w-[20%]">
        <FilterCard />
      </div>
      
     
      {
        jobsArray.length <= 0 ? (<h1 className="text-3xl font-medium text-center mx-auto mt-20 ">No Job <span className="text-[#F83003]">Found</span></h1>) :(

         
    <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
      <div className="grid grid-cols-3 gap-4">
        {jobsArray.map((item, index) => (
          <div key={index}>
            <Job {...item} />
          </div>
        ))}
      </div>
    </div>
  )
      }
     </div>
      
      </div>
    </div>
  );
};

export default Jobs;
