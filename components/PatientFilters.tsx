import { MenuItem, Stack, TextField } from "@mui/material";

export default function PatientFilters() {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        select
        label="Gender"
        size="small"
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </TextField>

      <TextField
        select
        label="Status"
        size="small"
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
      </TextField>
    </Stack>
  );
}