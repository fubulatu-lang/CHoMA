import {

Card,

CardContent,

Typography,

Stack

} from "@mui/material";

import {Patient} from "../api/patient.types";

export default function PatientCard({

patient

}:{

patient:Patient

}){

return(

<Card>

<CardContent>

<Stack spacing={1}>

<Typography variant="h6">

{patient.firstName} {patient.lastName}

</Typography>

<Typography>

{patient.hospitalNumber}

</Typography>

<Typography color="text.secondary">

{patient.phone}

</Typography>

</Stack>

</CardContent>

</Card>

);

}