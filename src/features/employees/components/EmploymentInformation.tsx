import { Grid, TextField } from "@mui/material";

export default function EmploymentInformation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Employee Number"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Employment Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Designation"
        />
      </Grid>
    </Grid>
  );
}