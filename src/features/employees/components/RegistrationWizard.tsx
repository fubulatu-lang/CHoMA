import { Stack } from "@mui/material";

import EmploymentInformation from "./EmploymentInformation";
import DepartmentInformation from "./DepartmentInformation";
import PayrollInformation from "./PayrollInformation";
import EmergencyContact from "./EmergencyContact";

export default function RegistrationWizard() {

  return (

    <Stack spacing={4}>

      <EmploymentInformation />

      <DepartmentInformation />

      <PayrollInformation />

      <EmergencyContact />

    </Stack>

  );

}