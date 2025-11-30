import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router";

const Job = ({job}) => {
  const navigate=useNavigate()

  //to get days ago value
  const daysAgoFunction =(monogoDbTime)=>{
const createdAt =new Date(monogoDbTime)
const currentTime=new Date();
const timeDifference=currentTime-createdAt
return Math.floor(timeDifference/(1000*24*60*60))
  }

  return (
    //for Jobs.jsx page
    <div className="border border-gray-200 p-5 rounded-md shadow-lg bg-white">
      <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600">
 {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)}` } {daysAgoFunction(job?.createdAt) === 0 ? "" :`days ago` }
</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/330px-Google_Favicon_2025.svg.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div >
<h1 className="font-bold ">{job.title}</h1>
<p>{job.description}.</p>
      </div>
        <div className='flex items-center gap-2 mt-4 '>
              <Badge className={'text-[#F83003] font-bold'} variant="ghost">{job?.position} Positions</Badge>
              <Badge className={'font-bold text-[#F83003]'} variant="ghost">{job?.jobType}</Badge>
              <Badge className={'text-[#F83003] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button onClick={()=>navigate(`/description/${job._id}`)} variant="outline">Details</Button>
                <Button className="bg-gray-700">Save for Later</Button>
            </div>
    </div>
  );
};

export default Job;
