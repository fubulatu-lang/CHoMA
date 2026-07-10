import { Stack } from "@mui/material";

import DashboardHeader from "../components/DashboardHeader";
import DashboardGrid from "../components/DashboardGrid";

export default function DashboardPage() {

    return (

        <Stack spacing={3}>

            <DashboardHeader />

            <DashboardGrid />

        </Stack>

    );

}