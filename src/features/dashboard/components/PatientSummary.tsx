import { Typography } from "@mui/material";

import AppCard from "../../../components/ui/AppCard";

export default function PatientSummary() {

    return (

        <AppCard>

            <Typography variant="h6">
                Patients
            </Typography>

            <Typography variant="h3">
                0
            </Typography>

        </AppCard>

    );

}