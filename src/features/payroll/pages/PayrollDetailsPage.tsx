import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import PayrollHeader from "../components/PayrollHeader";

export default function PayrollDetailsPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Payroll Details"
                    subtitle="View payroll information"
                />

                <PayrollHeader />

            </Stack>

        </PageContainer>

    );

}