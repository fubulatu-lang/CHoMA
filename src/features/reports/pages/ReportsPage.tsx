import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import ReportHeader from "../components/ReportHeader";
import ReportSummary from "../components/ReportSummary";
import ReportSearch from "../components/ReportSearch";
import ReportFilters from "../components/ReportFilters";
import ReportTable from "../components/ReportTable";

import { useReports } from "../hooks/useReports";

export default function ReportsPage() {

    const { data = [] } = useReports();

    return (
        <PageContainer>
            <Stack spacing={3}>

                <PageHeader
                    title="Reports"
                    subtitle="Hospital reports and analytics"
                />

                <ReportHeader />

                <ReportSummary />

                <ReportSearch />

                <ReportFilters />

                <ReportTable reports={data} />

            </Stack>
        </PageContainer>
    );

}