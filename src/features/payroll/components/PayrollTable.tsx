import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

import { Payroll } from "../api/payroll.types";
import PayrollStatus from "./PayrollStatus";

interface Props {
  payrolls: Payroll[];
}

export default function PayrollTable({
  payrolls
}: Props) {
  return (
    <Table>

      <TableHead>

        <TableRow>

          <TableCell>Employee</TableCell>

          <TableCell>Month</TableCell>

          <TableCell>Net Salary</TableCell>

          <TableCell>Payment Date</TableCell>

          <TableCell>Status</TableCell>

        </TableRow>

      </TableHead>

      <TableBody>

        {payrolls.map(payroll => (

          <TableRow key={payroll.id}>

            <TableCell>

              {payroll.employeeName}

            </TableCell>

            <TableCell>

              {payroll.payrollMonth}

            </TableCell>

            <TableCell>

              GHS {payroll.netSalary.toFixed(2)}

            </TableCell>

            <TableCell>

              {payroll.paymentDate ?? "--"}

            </TableCell>

            <TableCell>

              <PayrollStatus
                status={payroll.status}
              />

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
  );
}