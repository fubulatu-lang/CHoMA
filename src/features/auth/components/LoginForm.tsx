import {

Stack,

TextField,

Typography

} from "@mui/material";

import AppButton from "../../../components/ui/AppButton";

export default function LoginForm(){

return(

<Stack spacing={3}>

<Typography

variant="h4"

fontWeight={700}

>

Sign In

</Typography>

<TextField

label="Email"

fullWidth

/>

<TextField

label="Password"

type="password"

fullWidth

/>

<AppButton>

Login

</AppButton>

</Stack>

);

}