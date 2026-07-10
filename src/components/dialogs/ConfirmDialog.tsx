import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

import AppButton from "../ui/AppButton";

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

export default function ConfirmDialog({
  open,
  title,
  onClose,
  onConfirm,
  children
}: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <AppButton onClick={onClose}>Cancel</AppButton>

        <AppButton onClick={onConfirm}>
          Confirm
        </AppButton>
      </DialogActions>
    </Dialog>
  );
}