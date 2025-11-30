import React from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {Label} from "../ui/label"

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Banglore", "Hydrebad", "Pune"],
  },
  {
    filterType:"Industry",
    array:["Frontend Developer","Backend Developer","Fullstack Developer"]
  },
  {
    filterType:"Salary",
    array:["0-40k","42k-1lakh","1lakh-4lakh"]
  }
];

const FilterCard = () => {
  return (
  <div className="w-full bg-white p-3 rounded-md">
   <h1 className="font-bold text-lg">Filter Jobs</h1>
    <hr mt-3/>
    <RadioGroup>
{
  filterData.map((data,index)=>(
    <div>
      <h1 className="font-bold text-lg">{data.filterType}</h1>
      {
        data.array.map((item,index)=>(
          <div className="flex gap-2 items-center my-2 my-2">
            <RadioGroupItem value={item} />
            <Label>{item}</Label>
          </div>
        ))
      }
    </div>
  ))
}
    </RadioGroup>
    </div>

  )
};

export default FilterCard;
