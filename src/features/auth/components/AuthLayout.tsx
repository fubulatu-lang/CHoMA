import {

Box,

Paper,

Container

} from "@mui/material";

export default function AuthLayout({

children

}:{

children:React.ReactNode

}){

return(

<Box

display="flex"

justifyContent="center"

alignItems="center"

minHeight="100vh"

>

<Container maxWidth="sm">

<Paper

elevation={2}

sx={{

padding:5,

borderRadius:6

}}

>

{children}

</Paper>

</Container>

</Box>

);

}