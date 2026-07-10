import {
 Drawer,
 Toolbar,
 List,
 ListItemButton,
 ListItemText
} from "@mui/material";

const width = 260;

export default function Sidebar() {
 return (
  <Drawer
   variant="permanent"
   sx={{
    width,
    flexShrink:0,
    "& .MuiDrawer-paper":{
      width,
      boxSizing:"border-box"
    }
   }}
  >
   <Toolbar />

   <List>

    <ListItemButton>
      <ListItemText primary="Dashboard"/>
    </ListItemButton>

    <ListItemButton>
      <ListItemText primary="Patients"/>
    </ListItemButton>

    <ListItemButton>
      <ListItemText primary="Employees"/>
    </ListItemButton>

    <ListItemButton>
      <ListItemText primary="Reports"/>
    </ListItemButton>

   </List>

  </Drawer>
 );
}