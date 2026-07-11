import {
  MenuItem,
  Stack,
  TextField
} from "@mui/material";

export default function PayrollFilters() {

  return (

    <Stack
      direction="row"
      spacing={2}
    >

      <TextField
        select
        label="Status"
        size="small"
        sx={{ minWidth: 180 }}
      >

        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="PENDING">
          Pending
        </MenuItem>

        <MenuItem value="PROCESSING">
          Processing
        </MenuItem>

        <MenuItem value="PAID">
          Paid
        </MenuItem>

        <MenuItem value="FAILED">
          Failed
        </MenuItem>

      </TextField>

    </Stack>

  );

}