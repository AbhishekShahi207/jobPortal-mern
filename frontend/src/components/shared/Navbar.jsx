import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {  LogOut, User2 } from 'lucide-react';
import { Link, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice";

const Navbar = () => {
    
  const navigate =useNavigate()
  const dispatch=useDispatch()
    const {user}=useSelector(store=>store.auth)

    const logoutHandler = async()=>{
try {
  const res= await axios.post(`${USER_API_END_POINT}/logout`,{},{withCredentials:true})
  if(res.data.success){
 dispatch(setUser(null))
  toast.success(res.data.message)
  navigate("/signup")
  }
 
} catch (error) {
  console.log(error)
  toast.error(error.response.data.message)
}
    }

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
                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div>
              <div className="flex gap-4 items-center">
                {" "}
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto}  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{user?.fullname}</h4>
                  <p className="text-sm text-muted-foreground ">
                   {user?.profile?.bio}
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2  text-gray-600">
                <div className="flex w-fit gap-2 cursor-pointer items-center">
                    <User2/>
                  <Button variant="link" className="border-none"><Link to="/profile" >View Profile</Link></Button>
                </div>
                <div className="flex w-fit gap-2 cursor-pointer items-center">
                    <LogOut />
                  <Button onClick={logoutHandler} variant="link">Logout</Button>
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
