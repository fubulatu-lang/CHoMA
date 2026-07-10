import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";

import EmployeeHeader from "../components/EmployeeHeader";

export default function EmployeeProfilePage() {

    return (

        <PageContainer>

            <Stack spacing={3}>

                <EmployeeHeader />

            </Stack>

        </PageContainer>

    );

}