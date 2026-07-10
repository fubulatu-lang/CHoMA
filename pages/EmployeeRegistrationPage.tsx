import PageContainer from "../../../components/common/PageContainer";

import PageHeader from "../../../components/common/PageHeader";

import RegistrationWizard from "../components/RegistrationWizard";

export default function EmployeeRegistrationPage() {

    return (

        <PageContainer>

            <PageHeader

                title="Register Employee"

                subtitle="Add a new employee"

            />

            <RegistrationWizard />

        </PageContainer>

    );

}