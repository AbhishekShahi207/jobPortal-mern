import { MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAllApplicants } from "../../redux/applicationSlice";
import { toast } from "sonner";
import axios from "axios"
import { APPLICATION_API_END_POINT } from "../../utils/constant";
import { Badge } from "../ui/badge";
  const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  const statusHandler =async(status,id)=>{
    try {
    const res = await axios.post(
      `${APPLICATION_API_END_POINT}/status/${id}/update`,
      { status },
      { withCredentials: true }
    );

    if (res.data.success) {
      toast.success(res.data.message);

      // Update UI immediately without reload
      const updatedApps = applicants.applications.map((app) =>
        app._id === id ? { ...app, status: status.toLowerCase() } : app
      );

      dispatch(
        setAllApplicants({
          ...applicants,
          applications: updatedApps,
        })
      );
    }
  }  catch (error) {
      console.log(error)  
      toast.error(error.response.data.message)
    }
  }
  return (
    <div>
      <Table>
        <TableCaption>A list applicants who applied for this Job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contacts</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants &&
            applicants?.applications?.map((item) => (
              <tr key={item._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell
                  className={`${
                    item.applicant?.profile?.resume
                      ? "text-blue-600 cursor-pointer"
                      : ""
                  }`}
                >
                  {item?.applicant?.profile?.resume ? (
                    <a href={item?.applicant?.profile?.resume} target="_blank">
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    "NA"
                  )}
                </TableCell>
                <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
                <TableCell ><Badge className={`${item.status === "accepted" ? "bg-green-700 " : item.status ==="rejected" ? "bg-red-600 " : 
                  ""}`}>{item?.status.toUpperCase()}</Badge></TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32 flex flex-col gap-3 cursor-pointer">
                      {shortlistingStatus.map((status, index) => (
                        <div onClick={()=>statusHandler(status,item._id)} key={index} className="">
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
