import React from "react";
import LatestJobCard from "./LatestJobCard";
const randomJob = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="text-2xl xs:grid-cols-1 sm:text-3xl md:text-4xl font-bold text-center">
        Latest & Top <span className="text-[#F83003]"> Job </span> Openings
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        {randomJob.map(() => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
