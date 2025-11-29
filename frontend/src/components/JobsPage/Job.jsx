import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

const Job = () => {
  return (
    //for Jobs.jsx page
    <div className="border border-gray-200 p-5 rounded-md shadow-lg bg-white">
      <div className="flex items-center justify-between">
        <p className="text-sm  text-gray-600">2 days ago</p>
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
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div >
<h1 className="font-bold ">Title</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate unde praesentium placeat modi porro ducimus eius hic in, molestiae nemo.</p>
      </div>
        <div className='flex items-center gap-2 mt-4 '>
              <Badge className={'text-[#F83003] font-bold'} variant="ghost">12 Positions</Badge>
              <Badge className={'font-bold text-[#F83003]'} variant="ghost">Part Time</Badge>
              <Badge className={'text-[#F83003] font-bold'} variant="ghost">24 LPA</Badge>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button variant="outline">Details</Button>
                <Button className="bg-gray-700">Save for Later</Button>
            </div>
    </div>
  );
};

export default Job;
