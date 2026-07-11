import {
  Box,
  Stack,
  Typography
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import PageContainer from "../../components/common/PageContainer";
import AppButton from "../../components/ui/AppButton";

export default function UnauthorizedPage() {
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
            variant="h2"
            fontWeight={700}
          >
            Access Denied
          </Typography>

          <Typography
            variant="h6"
            align="center"
          >
            You don't have permission to access this page.
          </Typography>

          <Typography
            color="text.secondary"
            align="center"
          >
            If you believe this is an error, contact your
            hospital administrator for the appropriate role
            assignment.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <AppButton
              component={RouterLink}
              to="/dashboard"
            >
              Dashboard
            </AppButton>

            <AppButton
              variant="outlined"
              component={RouterLink}
              to="/login"
            >
              Sign In Again
            </AppButton>
          </Stack>
        </Stack>
      </Box>
    </PageContainer>
  );
}
