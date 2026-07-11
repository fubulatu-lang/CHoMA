import StatusChip from "../../../components/ui/StatusChip";

interface Props {

  status: string;

}

export default function PayrollStatus({

  status

}: Props) {

  return (

    <StatusChip status={status} />

  );

}