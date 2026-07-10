import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <TopBar />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3
          }}
        >
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}