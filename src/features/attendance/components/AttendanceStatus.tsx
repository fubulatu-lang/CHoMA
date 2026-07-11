import StatusChip from "../../../components/ui/StatusChip";

interface Props {

  status: string;

}

export default function AttendanceStatus({

  status

}: Props) {

  return (

    <StatusChip status={status} />

  );

}