import {
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

import { Report } from "../api/report.types";

interface Props {
  report: Report;
}

export default function ReportCard({
  report,
}: Props) {

  return (

    <Card>

      <CardContent>

        <Stack spacing={1}>

          <Typography variant="h6">
            {report.title}
          </Typography>

          <Typography>
            {report.type}
          </Typography>

          <Typography color="text.secondary">
            {report.generatedBy}
          </Typography>

        </Stack>

      </CardContent>

    </Card>

  );

}