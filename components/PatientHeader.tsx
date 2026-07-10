import { Stack, Typography } from "@mui/material";

export default function PatientHeader() {
  return (
    <Stack spacing={1}>
      <Typography variant="h4" fontWeight={700}>
        Patient Profile
      </Typography>

      <Typography color="text.secondary">
        View patient demographics and medical information.
      </Typography>
    </Stack>
  );
}