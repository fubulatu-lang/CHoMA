import { Grid, TextField } from "@mui/material";

export default function ContactInformation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Phone Number" />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Email Address" />
      </Grid>

      <Grid item xs={12}>
        <TextField fullWidth label="Residential Address" />
      </Grid>
    </Grid>
  );
}