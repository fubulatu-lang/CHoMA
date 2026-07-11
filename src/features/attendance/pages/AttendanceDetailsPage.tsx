import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import AttendanceHeader from "../components/AttendanceHeader";

export default function AttendanceDetailsPage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader

                    title="Attendance Details"

                    subtitle="Employee attendance information"

                />

                <AttendanceHeader />

            </Stack>

        </PageContainer>

    );

}