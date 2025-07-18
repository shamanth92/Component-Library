"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import { basicDialogCode } from "@/rawCode/dialog";
import { useState } from "react";

export default function DialogComponent() {
  const [showDialog, setShowDialog] = useState(false);
  const [showBasicCode, setShowBasicCode] = useState(false);

  return (
    <ComponentLayout componentType="Dialog">
      <div>
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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowBasicCode(!showBasicCode)}
          >
            Show code
          </button>
        </div>
        {showBasicCode && (
          <div>
            <CodeBlock code={basicDialogCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
