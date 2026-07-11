import StatusChip from "../../../components/ui/StatusChip";

interface Props {
  status: string;
}

export default function ReportStatus({
  status,
}: Props) {

  return (

    <StatusChip status={status} />

  );

}