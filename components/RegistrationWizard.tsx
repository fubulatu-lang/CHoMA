import { Stack } from "@mui/material";

import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import NextOfKin from "./NextOfKin";
import InsuranceInformation from "./InsuranceInformation";

export default function RegistrationWizard() {
  return (
    <Stack spacing={4}>
      <PersonalInformation />
      <ContactInformation />
      <NextOfKin />
      <InsuranceInformation />
    </Stack>
  );
}