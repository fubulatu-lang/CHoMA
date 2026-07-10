import { Typography } from "@mui/material";

import AppCard from "../../../components/ui/AppCard";

export default function WelcomeCard() {

    return (

        <AppCard>

            <Typography variant="h5" fontWeight={700}>
                Welcome to HRAPIMS
            </Typography>

            <Typography color="text.secondary">
                Hospital & HR Management Platform
            </Typography>

        </AppCard>

    );

}