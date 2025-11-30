import React from "react";
import LatestJobCard from "./LatestJobCard";
import { useSelector } from "react-redux";




const LatestJob = () => {
  const{allJobs}=useSelector(store=>store.job)
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="text-2xl xs:grid-cols-1 sm:text-3xl md:text-4xl font-bold text-center">
        Latest & Top <span className="text-[#F83003]"> Job </span> Openings
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        {
        allJobs.length <= 0 ? <span>No Joba Available</span> : allJobs?.slice(0,6).map((job)=>( <LatestJobCard key={job._id}  job={job} />))
        
      }
      </div>
    </div>
  );
};

export default LatestJob;
