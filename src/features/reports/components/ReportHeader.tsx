import {
    Stack,
    Typography
} from "@mui/material";

export default function ReportHeader() {

    return (

        <Stack spacing={1}>

            <Typography
                variant="h4"
                fontWeight={700}
            >

                Reports

            </Typography>

            <Typography color="text.secondary">

                Generate and manage operational reports.

            </Typography>

        </Stack>

    );

}