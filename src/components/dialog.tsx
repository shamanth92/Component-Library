"use client";

import { ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  open: boolean;
};

type DialogChildProps = {
  children: ReactNode;
};

export const Dialog = ({ children, open }: DialogProps) => {
  return (
    open && (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
        <div className="w-fit border-1 border-gray-300">{children}</div>
      </div>
    )
  );
};

export const DialogTitle = ({ children }: DialogChildProps) => {
  return (
    <div className="bg-white h-15 font-mono font-bold text-lg flex flex-row items-center p-6">
      {children}
    </div>
  );
};

export const DialogContent = ({ children }: DialogChildProps) => {
  return <div className="bg-white  p-10 font-mono">{children}</div>;
};

export const DialogActions = ({ children }: DialogChildProps) => {
  return (
    <div className="bg-white  p-4 flex justify-end">
      <div className="flex flex-row gap-4">{children}</div>
    </div>
  );
};
