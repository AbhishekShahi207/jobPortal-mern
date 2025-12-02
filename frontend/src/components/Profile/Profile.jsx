
import Navbar from "../shared/Navbar";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import {Badge} from "../ui/badge"
import { Label } from "../ui/label";
import AppliedJobTable from "../JobsPage/AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJob from "../../hooks/useGetAppliedJob";




const Profile = () => {
useGetAppliedJob()
    const[open,setOpen]=useState(false)
    const {user} = useSelector(store=>store.auth)
const isResume =true;




  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="">
              <AvatarImage
                className="h-10 w-10"
                src={user?.profile?.profilePhoto}
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p className="">
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true) } className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 ">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
            <h1 className="mb-2 text-md">Skills</h1>
            <div className="flex items-center gap-1 ">

            { user?.profile?.skills.length <=0 ? ( <Badge> No Skills Listed..</Badge>) :
                user?.profile?.skills.map((item,index)=> <Badge key={index}>{item}</Badge>)
            }
            </div>
        </div>
        <div className="grid w-full max-w-s items-center gap-1.5">
            <Label className="text-md font-bold" > Resume</Label>
{
    isResume ? <a target="blank" href={user?.profile?.resume} className="text-blue-500 hover:underline">{user?.profile?.resumeOriginalName}</a> : <Label>No Resume Found..</Label>
}
        </div>
     
      </div>
         <div className="max-w-4xl mx-auto bg-white rounded-2xl my-5 p-8">
<h1 className="font-bold text-lg mb-2">Applied Jobs</h1>
<AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
