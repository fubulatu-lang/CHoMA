import { Grid, TextField } from "@mui/material";

export default function PersonalInformation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField fullWidth label="First Name" />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField fullWidth label="Middle Name" />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField fullWidth label="Last Name" />
      </Grid>
    </Grid>
  );
}