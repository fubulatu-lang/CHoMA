import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import AppButton from "../../../components/ui/AppButton";

export default function GenerateReportPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Generate Report"
                    subtitle="Create a new report"
                />

                <AppButton>

                    Generate Report

                </AppButton>

            </Stack>

        </PageContainer>

    );

}