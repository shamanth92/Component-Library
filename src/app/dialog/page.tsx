"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import { useState } from "react";

export default function DialogComponent() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 min-h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Dialog Component</p>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Dialog</p>
          <div className="flex flex-row justify-evenly">
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowDialog(true)}
            >
              Open Dialog
            </Button>
            <Dialog open={showDialog}>
              <DialogTitle>Dialog Title</DialogTitle>
              <hr className="text-gray-300"></hr>
              <DialogContent>
                Illinois is a midwestern state bordering Indiana in the east and
                the Mississippi River in the west. Nicknamed the Prairie State,
                its marked by farmland, forests, rolling hills and wetlands.
              </DialogContent>
              <hr className="text-gray-300"></hr>
              <DialogActions>
                <Button variant={BUTTONTYPES.Contained}>SUBMIT</Button>
                <Button
                  variant={BUTTONTYPES.Outlined}
                  onClick={() => setShowDialog(false)}
                >
                  CLOSE
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
