import {

    MenuItem,

    Stack,

    TextField

} from "@mui/material";

export default function EmployeeFilters() {

    return (

        <Stack direction="row" spacing={2}>

            <TextField

                select

                size="small"

                label="Department"

                sx={{ minWidth: 220 }}

            >

                <MenuItem value="">

                    All

                </MenuItem>

            </TextField>

            <TextField

                select

                size="small"

                label="Status"

                sx={{ minWidth: 180 }}

            >

                <MenuItem value="">

                    All

                </MenuItem>

                <MenuItem value="ACTIVE">

                    Active

                </MenuItem>

                <MenuItem value="ON_LEAVE">

                    On Leave

                </MenuItem>

            </TextField>

        </Stack>

    );

}