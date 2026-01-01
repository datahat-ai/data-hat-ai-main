import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface DeployFormDialogProps {
  trigger: React.ReactNode;
}

const DeployFormDialog = ({ trigger }: DeployFormDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md soft-glass border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-header">
            Start Your Pilot
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your needs and we'll help you deploy Orkestra.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default DeployFormDialog;
