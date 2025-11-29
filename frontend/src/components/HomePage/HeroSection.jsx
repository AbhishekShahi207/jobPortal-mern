import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className=" flex flex-col gap-5 my-10">
 
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-black font-medium ">
          Connecting Talent With Opportunity
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-[#F83003]">Dream Job</span>
        </h1>
        <p className="hidden lg:block">A modern platform designed to connect skilled professionals with employers searching for passionate, talented individuals.</p>
  <div className='flex md:w-[40%] sm:w-[60%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input type="text"
            placeholder="Find your dream jobs"
                 className='outline-none border-none w-full'

            />
             <Button className="rounded-r-full text-black bg-[#F83003] hover:bg-[#d6401f] transition-colors">
                        <Search className='h-5 w-5' />
                    </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
