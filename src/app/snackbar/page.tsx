"use client";
import { Button, BUTTONTYPES } from "@/components/button";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { POSITION, SnackBar } from "@/components/snackbar";
import { basicSnackbarCode } from "@/rawCode/snackbar";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function SnackbarComponent() {
  const [showBasic, setShowBasic] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showBasicCode, setShowBasicCode] = useState(false);

  return (
    <ComponentLayout componentType="Snackbar">
      <div>
        <p className="font-mono text-lg font-bold pb-8">Basic Snackbar</p>
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
            <CodeBlock code={basicSnackbarCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
