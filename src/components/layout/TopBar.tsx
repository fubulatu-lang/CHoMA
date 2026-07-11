import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Badge,
    Box
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

interface Props {

    drawerWidth:number;

    onMenuClick:()=>void;

}

export default function TopBar({

    drawerWidth,

    onMenuClick

}:Props){

    return(

        <AppBar
            position="fixed"
            color="inherit"
            elevation={1}
            sx={{
                width:{
                    md:`calc(100% - ${drawerWidth}px)`
                },
                ml:{
                    md:`${drawerWidth}px`
                }
            }}
        >

            <Toolbar>

                <IconButton
                    edge="start"
                    onClick={onMenuClick}
                    sx={{
                        mr:2,
                        display:{
                            md:"none"
                        }
                    }}
                >

                    <MenuIcon/>

                </IconButton>

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow:1,
                        fontWeight:700
                    }}
                >

                    CHoMA

                </Typography>

                <IconButton>

                    <Badge
                        badgeContent={5}
                        color="error"
                    >

                        <NotificationsOutlinedIcon/>

                    </Badge>

                </IconButton>

                <Box ml={2}>

                    <Avatar>

                        A

                    </Avatar>

                </Box>

            </Toolbar>

        </AppBar>

    );

}
