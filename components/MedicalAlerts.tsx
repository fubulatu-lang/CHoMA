import { Alert, Stack } from "@mui/material";

export default function MedicalAlerts() {
  return (
    <Stack spacing={2}>
      <Alert severity="info">
        No medical alerts recorded.
      </Alert>
    </Stack>
  );
}