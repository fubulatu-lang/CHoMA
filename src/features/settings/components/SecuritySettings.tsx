import {
    Card,
    CardContent,
    FormControlLabel,
    Stack,
    Switch,
    Typography
} from "@mui/material";

export default function SecuritySettings() {

    return (

        <Card>

            <CardContent>

                <Stack spacing={2}>

                    <Typography variant="h6">

                        Security

                    </Typography>

                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Require Two-Factor Authentication"
                    />

                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Enable Session Timeout"
                    />

                    <FormControlLabel
                        control={<Switch />}
                        label="Allow Remote Login"
                    />

                </Stack>

            </CardContent>

        </Card>

    );

}
