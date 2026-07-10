import { Chip } from "@mui/material";

type Status="active"|"inactive"|"pending";

export default function StatusChip({

status

}:{

status:Status

}){

const color=

status==="active"

?"success"

:status==="pending"

?"warning"

:"default";

return(

<Chip

label={status}

color={color}

/>

);

}