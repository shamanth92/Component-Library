"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { POSITION, SnackBar } from "@/components/snackbar";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function SnackbarComponent() {
  const [showBasic, setShowBasic] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Snackbar Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Card</p>
          <div className="flex flex-row justify-evenly">
            <SnackBar
              content="This is content area"
              action="Dismiss"
              visible={showBasic}
              dismiss={setShowBasic}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowBasic(true)}
            >
              Open
            </Button>
            <SnackBar
              content="This is content area"
              type="success"
              visible={showSuccess}
              autoDismiss={true}
              dismiss={setShowSuccess}
              position={POSITION.TOP_LEFT}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowSuccess(true)}
            >
              Open
            </Button>
            <SnackBar
              content="This is content area"
              type="error"
              Icon={XMarkIcon}
              visible={showError}
              dismiss={setShowError}
              position={POSITION.TOP_RIGHT}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowError(true)}
            >
              Open
            </Button>

            <SnackBar
              content="This is content area"
              action="Dismiss"
              visible={showBasic}
              dismiss={setShowBasic}
              position={POSITION.BOTTOM_LEFT}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowBasic(true)}
            >
              Open
            </Button>
            <SnackBar
              content="This is content area"
              type="success"
              visible={showSuccess}
              autoDismiss={true}
              dismiss={setShowSuccess}
              position={POSITION.BOTTOM_CENTER}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowSuccess(true)}
            >
              Open
            </Button>
            <SnackBar
              content="This is content area"
              type="error"
              Icon={XMarkIcon}
              visible={showError}
              dismiss={setShowError}
              position={POSITION.BOTTOM_RIGHT}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowError(true)}
            >
              Open
            </Button>

            <SnackBar
              content="This is content area"
              type="error"
              Icon={XMarkIcon}
              visible={showError}
              dismiss={setShowError}
              position={POSITION.CENTER}
            />
            <Button
              variant={BUTTONTYPES.Contained}
              onClick={() => setShowError(true)}
            >
              Open
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
