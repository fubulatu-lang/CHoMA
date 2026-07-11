import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import AttendanceHeader from "../components/AttendanceHeader";
import AttendanceSummary from "../components/AttendanceSummary";
import AttendanceSearch from "../components/AttendanceSearch";
import AttendanceFilters from "../components/AttendanceFilters";
import AttendanceTable from "../components/AttendanceTable";

import { useAttendances } from "../hooks/useAttendances";

export default function AttendanceListPage() {

    const { data = [] } = useAttendances();

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Attendance"
                    subtitle="Manage employee attendance"
                />

                <AttendanceHeader />

                <AttendanceSummary />

                <AttendanceSearch />

                <AttendanceFilters />

                <AttendanceTable attendances={data} />

            </Stack>

        </PageContainer>

    );

}