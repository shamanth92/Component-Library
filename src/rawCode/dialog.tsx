export const basicDialogCode = `
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
 import { Button, BUTTONTYPES } from "@/components/button";

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
`;
