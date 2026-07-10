import { Stack, Typography } from "@mui/material";

export default function DashboardHeader() {

    return (

        <Stack>

            <Typography variant="h4" fontWeight={700}>
                Dashboard
            </Typography>

            <Typography color="text.secondary">
                Welcome back.
            </Typography>

        </Stack>

    );

}