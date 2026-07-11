import {
    Card,
    CardContent,
    Stack,
    TextField
} from "@mui/material";

import AppButton from "../../../components/ui/AppButton";

export default function SettingsForm() {

    return (

        <Card>

            <CardContent>

                <Stack spacing={3}>

                    <TextField
                        label="Hospital Name"
                        fullWidth
                    />

                    <TextField
                        label="Hospital Email"
                        fullWidth
                    />

                    <TextField
                        label="Hospital Phone"
                        fullWidth
                    />

                    <AppButton>

                        Save Settings

                    </AppButton>

                </Stack>

            </CardContent>

        </Card>

    );

}
