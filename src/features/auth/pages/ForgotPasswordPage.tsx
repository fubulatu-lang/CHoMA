import {

Stack,

TextField,

Typography

} from "@mui/material";

import AuthLayout from "../components/AuthLayout";

import AppButton from "../../../components/ui/AppButton";

export default function ForgotPasswordPage(){

return(

<AuthLayout>

<Stack spacing={3}>

<Typography

variant="h4"

fontWeight={700}

>

Forgot Password

</Typography>

<TextField

label="Email"

fullWidth

/>

<AppButton>

Send Reset Link

</AppButton>

</Stack>

</AuthLayout>

);

}