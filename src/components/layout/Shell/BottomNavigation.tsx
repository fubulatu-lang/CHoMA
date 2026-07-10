import {
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

export default function MobileBottomNavigation() {
  return (
    <BottomNavigation showLabels>

      <BottomNavigationAction
        label="Dashboard"
        icon={<DashboardIcon />}
      />

    </BottomNavigation>
  );
}