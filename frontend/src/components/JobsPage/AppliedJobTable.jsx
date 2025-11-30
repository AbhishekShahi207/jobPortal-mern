import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "../ui/badge"

const AppliedJobTable = () => {
  return (
    <div>
     <Table>
<TableCaption>List of Applied Jobs</TableCaption>
<TableHeader>
    <TableRow>

    <TableHead>Date</TableHead>
    <TableHead>Job Role</TableHead>
    <TableHead>Company</TableHead>
    <TableHead className="text-right">Status</TableHead>
     </TableRow>
</TableHeader>
<TableBody>
    {
        [1,2,3,4].map(()=>(
            <TableRow>
                <TableCell>17-02-2024</TableCell>
                <TableCell>Backend Developere</TableCell>
                <TableCell>Google</TableCell>
                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
            </TableRow>
        ))
    }
</TableBody>
   
     </Table>
    </div>
  )
}

export default AppliedJobTable
