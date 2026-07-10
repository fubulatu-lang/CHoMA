import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";
import RegistrationWizard from "../components/RegistrationWizard";

export default function EditPatientPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Edit Patient"
        subtitle="Update patient information"
      />

      <RegistrationWizard />
    </PageContainer>
  );
}