import {
Stack,
Typography
} from "@mui/material";

export default function PageHeader({

title,

subtitle

}:{

title:string;

subtitle?:string;

}){

return(

<Stack spacing={1} mb={4}>

<Typography
variant="h4"
fontWeight={700}
>

{title}

</Typography>

{subtitle && (

<Typography
color="text.secondary"
>

{subtitle}

</Typography>

)}

</Stack>

);

}