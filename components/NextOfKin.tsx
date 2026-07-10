import { Grid, TextField } from "@mui/material";

export default function NextOfKin() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Next of Kin" />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Relationship" />
      </Grid>
    </Grid>
  );
}