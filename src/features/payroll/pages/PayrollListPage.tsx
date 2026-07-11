import { Stack } from "@mui/material";

import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

import PayrollHeader from "../components/PayrollHeader";
import PayrollSummary from "../components/PayrollSummary";
import PayrollSearch from "../components/PayrollSearch";
import PayrollFilters from "../components/PayrollFilters";
import PayrollTable from "../components/PayrollTable";

import { usePayrolls } from "../hooks/usePayrolls";

export default function PayrollListPage() {

    const { data = [] } = usePayrolls();

    return (

        <PageContainer>

            <Stack spacing={3}>

                <PageHeader
                    title="Payroll"
                    subtitle="Manage employee payroll"
                />

                <PayrollHeader />

                <PayrollSummary />

                <PayrollSearch />

                <PayrollFilters />

                <PayrollTable payrolls={data} />

            </Stack>

        </PageContainer>

    );

}