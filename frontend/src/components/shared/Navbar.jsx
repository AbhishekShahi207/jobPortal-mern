import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {  LogOut, User2 } from 'lucide-react';
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const user=true;

  return (
    <div className="bg-white">
      <div className="flex items-center  justify-between mx-auto max-w-7xl h-16 px-2">
        {/* RIGHT PART */}
        <div>
          <h1 className="text-2xl font-bold ">
            Job<span className="text-[#F83003]">Portal</span>
          </h1>
        </div>
        <div className="flex gap-12 items-center">
          <ul className="flex font-medium items-center  gap-5">
            <li><NavLink to="/" className={({isActive})=> isActive ? "underline" :""}>Home</NavLink></li>
            <li><NavLink to="/jobs" className={({isActive})=> isActive ? "underline " :""}>Jobs</NavLink></li>
            <li><NavLink to="/browse" className={({isActive})=> isActive ? "underline" :""}>Browse</NavLink></li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                    <Link to="/login"> <Button variant="outline">Login</Button></Link>
                   <Link to="/signup">     <Button>Signup</Button></Link>
                
                </div>
            ) :
            ( <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div>
              <div className="flex gap-4 items-center">
                {" "}
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h4 className="font-medium">Abhishek Shahi</h4>
                  <p className="text-sm text-muted-foreground ">
                    Lorem ipsum dolor sit amet.s
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2  text-gray-600">
                <div className="flex w-fit gap-2 cursor-pointer items-center">
                    <User2/>
                  <Button variant="link" className="border-none">View Profile</Button>
                </div>
                <div className="flex w-fit gap-2 cursor-pointer items-center">
                    <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
              </div>
            </PopoverContent>
          </Popover>)
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
