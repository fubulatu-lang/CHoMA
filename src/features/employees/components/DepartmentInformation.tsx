import {
  Grid,
  MenuItem,
  TextField
} from "@mui/material";

export default function DepartmentInformation() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          select
          label="Department"
        >
          <MenuItem value="Administration">
            Administration
          </MenuItem>

          <MenuItem value="Medical">
            Medical
          </MenuItem>

          <MenuItem value="Nursing">
            Nursing
          </MenuItem>

          <MenuItem value="Laboratory">
            Laboratory
          </MenuItem>

          <MenuItem value="Pharmacy">
            Pharmacy
          </MenuItem>

        </TextField>
      </Grid>

    </Grid>
  );
}