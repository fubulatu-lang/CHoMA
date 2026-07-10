import {
  createBrowserRouter
} from "react-router-dom";

import {
  Typography,
  Box
} from "@mui/material";

function Placeholder() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h3">
        HRAPIMS
      </Typography>
    </Box>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Placeholder />
  }
]);