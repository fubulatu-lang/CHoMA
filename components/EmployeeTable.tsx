import {

    Table,

    TableHead,

    TableBody,

    TableCell,

    TableRow

} from "@mui/material";

import { Employee } from "../api/employee.types";

interface Props {

    employees: Employee[];

}

export default function EmployeeTable({

    employees

}: Props) {

    return (

        <Table>

            <TableHead>

                <TableRow>

                    <TableCell>No.</TableCell>

                    <TableCell>Name</TableCell>

                    <TableCell>Department</TableCell>

                    <TableCell>Designation</TableCell>

                    <TableCell>Status</TableCell>

                </TableRow>

            </TableHead>

            <TableBody>

                {employees.map(employee => (

                    <TableRow key={employee.id}>

                        <TableCell>

                            {employee.employeeNumber}

                        </TableCell>

                        <TableCell>

                            {employee.firstName} {employee.lastName}

                        </TableCell>

                        <TableCell>

                            {employee.department}

                        </TableCell>

                        <TableCell>

                            {employee.designation}

                        </TableCell>

                        <TableCell>

                            {employee.status}

                        </TableCell>

                    </TableRow>

                ))}

            </TableBody>

        </Table>

    );

}