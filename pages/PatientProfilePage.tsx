import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PatientHeader from "../components/PatientHeader";
import MedicalAlerts from "../components/MedicalAlerts";

export default function PatientProfilePage() {
  return (
    <PageContainer>
      <Stack spacing={3}>
        <PatientHeader />
        <MedicalAlerts />
      </Stack>
    </PageContainer>
  );
}