import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

import { Attendance } from "../api/attendance.types";
import AttendanceStatus from "./AttendanceStatus";

interface Props {
  attendances: Attendance[];
}

export default function AttendanceTable({
  attendances
}: Props) {
  return (
    <Table>

      <TableHead>

        <TableRow>

          <TableCell>Employee</TableCell>

          <TableCell>Date</TableCell>

          <TableCell>Check In</TableCell>

          <TableCell>Check Out</TableCell>

          <TableCell>Status</TableCell>

        </TableRow>

      </TableHead>

      <TableBody>

        {attendances.map(item => (

          <TableRow key={item.id}>

            <TableCell>{item.employeeName}</TableCell>

            <TableCell>{item.attendanceDate}</TableCell>

            <TableCell>{item.checkIn}</TableCell>

            <TableCell>{item.checkOut ?? "--"}</TableCell>

            <TableCell>

              <AttendanceStatus status={item.status} />

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
  );
}