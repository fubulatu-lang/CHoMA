import {
  MenuItem,
  Stack,
  TextField
} from "@mui/material";

export default function ReportFilters() {

  return (

    <Stack direction="row" spacing={2}>

      <TextField
        select
        label="Report Type"
        size="small"
        sx={{ minWidth: 220 }}
      >

        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="PATIENT">
          Patient
        </MenuItem>

        <MenuItem value="EMPLOYEE">
          Employee
        </MenuItem>

        <MenuItem value="ATTENDANCE">
          Attendance
        </MenuItem>

        <MenuItem value="PAYROLL">
          Payroll
        </MenuItem>

        <MenuItem value="FINANCIAL">
          Financial
        </MenuItem>

      </TextField>

    </Stack>

  );

}