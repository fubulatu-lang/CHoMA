import {
Stack,
Typography
} from "@mui/material";

export default function EmptyState({

message

}:{

message:string

}){

return(

<Stack

spacing={2}

alignItems="center"

mt={8}

>

<Typography>

{message}

</Typography>

</Stack>

);

}