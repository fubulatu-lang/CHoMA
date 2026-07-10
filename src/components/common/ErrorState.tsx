import {
Stack,
Typography,
Button
} from "@mui/material";

export default function ErrorState(){

return(

<Stack

spacing={2}

alignItems="center"

mt={8}

>

<Typography variant="h5">

Something went wrong

</Typography>

<Button variant="contained">

Retry

</Button>

</Stack>

);

}