import {
Button,
ButtonProps
} from "@mui/material";

export default function AppButton(
props:ButtonProps
){

return(

<Button
variant="contained"
disableElevation
{...props}
/>

);

}