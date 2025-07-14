export const basicDrawerCode = `
import { Drawer, SideBarOptions, SideBarTitle } from "@/components/drawer";
import {
  ArrowUpCircleIcon,
  Bars3Icon,
  BookOpenIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

<div>
        <p className="font-mono text-lg font-bold pb-8">Basic Drawer</p>
        <div className="flex flex-row justify-evenly">
          <button
            className="border-1 p-2 border-gray-300 cursor-pointer"
            onClick={() => showBasicDrawer(!basicDrawer)}
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <Drawer
          open={basicDrawer}
          logout={true}
          onClose={() => showBasicDrawer(false)}
        >
          <SideBarTitle
            title="Company Title"
            Icon={ClipboardDocumentCheckIcon}
          />
          <SideBarOptions
            optionList={[
              "Overview",
              "Payments",
              "Account",
              "Analytics",
              "Settings",
            ]}
            OptionIconList={[
              ClipboardDocumentCheckIcon,
              ArrowUpCircleIcon,
              BookOpenIcon,
              CalculatorIcon,
              Cog8ToothIcon,
            ]}
          />
        </Drawer>
      </div>
`;

export const sectionDrawerCode = `
import { Drawer, SideBarOptions, SideBarTitle } from "@/components/drawer";
import {
  ArrowUpCircleIcon,
  Bars3Icon,
  BookOpenIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

  <div>
        <p className="font-mono text-lg font-bold pb-8">Drawer with Sections</p>
        <div className="flex flex-row justify-evenly">
          <button
            className="border-1 p-2 border-gray-300 cursor-pointer"
            onClick={() => showSectionDrawer(!sectionDrawer)}
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <Drawer
          open={sectionDrawer}
          logout={true}
          onClose={() => showSectionDrawer(false)}
        >
          <SideBarTitle
            title="Company Title"
            Icon={ClipboardDocumentCheckIcon}
          />
          <SideBarOptions
            sections={true}
            sectionList={[
              {
                name: "Payment",
                options: ["Cards", "History"],
                OptionIconList: [ClipboardDocumentCheckIcon, ArrowUpCircleIcon],
              },
              {
                name: "Account",
                options: ["Profile", "Settings", "Address"],
                OptionIconList: [BookOpenIcon, CalculatorIcon, Cog8ToothIcon],
              },
            ]}
          />
        </Drawer>
      </div>
`;

export const rightDrawerCode = `
import { Drawer, SideBarOptions, SideBarTitle } from "@/components/drawer";
import {
  ArrowUpCircleIcon,
  Bars3Icon,
  BookOpenIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
 
   <div>
        <p className="font-mono text-lg font-bold pb-8">Right Drawer</p>
        <div className="flex flex-row justify-evenly">
          <button
            className="border-1 p-2 border-gray-300 cursor-pointer"
            onClick={() => showRightDrawer(!rightDrawer)}
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <Drawer
          open={rightDrawer}
          logout={true}
          onClose={() => showRightDrawer(false)}
          position="right"
        >
          <SideBarTitle
            title="Company Title"
            Icon={ClipboardDocumentCheckIcon}
          />
          <SideBarOptions
            optionList={[
              "Overview",
              "Payments",
              "Account",
              "Analytics",
              "Settings",
            ]}
            OptionIconList={[
              ClipboardDocumentCheckIcon,
              ArrowUpCircleIcon,
              BookOpenIcon,
              CalculatorIcon,
              Cog8ToothIcon,
            ]}
          />
        </Drawer>
      </div>
`;
