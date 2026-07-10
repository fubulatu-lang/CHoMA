import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeTable from "../components/EmployeeTable";

import { useEmployees } from "../hooks/useEmployees";

export default function EmployeeListPage() {

    const { data = [] } = useEmployees();

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Employees"
                    subtitle="Manage hospital employees"
                />

                <EmployeeSearch />

                <EmployeeFilters />

                <EmployeeTable employees={data} />

            </Stack>

        </PageContainer>

    );

}