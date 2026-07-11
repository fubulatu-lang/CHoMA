import {

    Stack,

    Typography

} from "@mui/material";

export default function AttendanceHeader() {

    return (

        <Stack spacing={1}>

            <Typography

                variant="h4"

                fontWeight={700}

            >

                Attendance

            </Typography>

            <Typography color="text.secondary">

                Monitor employee attendance records.

            </Typography>

        </Stack>

    );

}