import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Separator } from './ui/separator';

const DialogLayout = ({
  triggerContent,
  dialogTitle,
  dialogdescription,
  dialogContent,
  dialogFooter,
}: {
  triggerContent?: React.ReactNode;
  dialogTitle?: string;
  dialogdescription?: string;
  dialogContent: React.ReactNode;
  dialogFooter?: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent aria-describedby='' className="max-w-[80%] md:w-max md:min-w-[40%] min-w-[90%] w-max bg-card">
        <DialogHeader>
          {dialogTitle && <DialogTitle className='text-left'>{dialogTitle}</DialogTitle>}
          {dialogdescription && (
            <DialogDescription>{dialogdescription}</DialogDescription>
          )}
        </DialogHeader>
        <Separator className="mt-1" />
        <div className="grid gap-4 py-4">{dialogContent}</div>
        {dialogFooter && <DialogFooter>{dialogFooter}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default DialogLayout;
