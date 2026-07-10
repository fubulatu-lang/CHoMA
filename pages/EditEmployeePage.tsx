import PageContainer from "../../../components/common/PageContainer";

import PageHeader from "../../../components/common/PageHeader";

import RegistrationWizard from "../components/RegistrationWizard";

export default function EditEmployeePage() {

    return (

        <PageContainer>

            <PageHeader

                title="Edit Employee"

                subtitle="Update employee details"

            />

            <RegistrationWizard />

        </PageContainer>

    );

}