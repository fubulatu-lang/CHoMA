import {

    Grid,

    Card,

    CardContent,

    Typography

} from "@mui/material";

export default function AttendanceSummary() {

    return (

        <Grid container spacing={2}>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Present

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Absent

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Late

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <Typography variant="subtitle2">

                            Leave

                        </Typography>

                        <Typography variant="h4">

                            0

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

        </Grid>

    );

}