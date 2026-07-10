import { Grid, TextField } from "@mui/material";

export default function InsuranceInformation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Insurance Provider" />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Policy Number" />
      </Grid>
    </Grid>
  );
}