export const basicSnackbarCode = `
import { Button, BUTTONTYPES } from "@/components/button";
import { POSITION, SnackBar } from "@/components/snackbar";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
`;
