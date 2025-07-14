"use client";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { Drawer, SideBarOptions, SideBarTitle } from "@/components/drawer";
import {
  basicDrawerCode,
  rightDrawerCode,
  sectionDrawerCode,
} from "@/rawCode/drawer";
import {
  ArrowUpCircleIcon,
  Bars3Icon,
  BookOpenIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DrawerComponent() {
  const [basicDrawer, showBasicDrawer] = useState(false);
  const [sectionDrawer, showSectionDrawer] = useState(false);
  const [rightDrawer, showRightDrawer] = useState(false);
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showSectionCode, setShowSectionCode] = useState(false);
  const [showRightCode, setShowRightCode] = useState(false);

  return (
    <ComponentLayout componentType="Drawer">
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
            <CodeBlock code={basicDrawerCode} />
          </div>
        )}
      </div>

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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowSectionCode(!showSectionCode)}
          >
            Show code
          </button>
        </div>
        {showSectionCode && (
          <div>
            <CodeBlock code={sectionDrawerCode} />
          </div>
        )}
      </div>

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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowRightCode(!showRightCode)}
          >
            Show code
          </button>
        </div>
        {showRightCode && (
          <div>
            <CodeBlock code={rightDrawerCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
