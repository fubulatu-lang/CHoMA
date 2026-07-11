import {
    Box,
    Stack,
    Typography
} from "@mui/material";

import {
    Link as RouterLink
} from "react-router-dom";

import PageContainer from "../../components/common/PageContainer";
import AppButton from "../../components/ui/AppButton";

export default function NotFoundPage() {

    return (

        <PageContainer>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="75vh"
            >

                <Stack
                    spacing={3}
                    alignItems="center"
                    maxWidth={600}
                >

                    <Typography
                        variant="h1"
                        fontWeight={700}
                    >

                        404

                    </Typography>

                    <Typography
                        variant="h4"
                        align="center"
                    >

                        Page Not Found

                    </Typography>

                    <Typography
                        color="text.secondary"
                        align="center"
                    >

                        The page you requested
                        does not exist or has
                        been moved.

                    </Typography>

                    <AppButton
                        component={RouterLink}
                        to="/dashboard"
                    >

                        Return to Dashboard

                    </AppButton>

                </Stack>

            </Box>

        </PageContainer>

    );

}
