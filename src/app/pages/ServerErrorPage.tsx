import {
  Box,
  Stack,
  Typography
} from "@mui/material";

import AppButton from "../../components/ui/AppButton";
import PageContainer from "../../components/common/PageContainer";

export default function ServerErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

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
          maxWidth={650}
        >
          <Typography
            variant="h2"
            fontWeight={700}
          >
            Something Went Wrong
          </Typography>

          <Typography
            variant="h6"
            align="center"
          >
            CHoMA encountered an unexpected error.
          </Typography>

          <Typography
            color="text.secondary"
            align="center"
          >
            This may be a temporary server issue.
            Please try again. If the problem persists,
            contact your system administrator.
          </Typography>

          <AppButton
            onClick={handleReload}
          >
            Reload Application
          </AppButton>
        </Stack>
      </Box>
    </PageContainer>
  );
}
