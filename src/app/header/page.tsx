"use client";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import { Header } from "@/components/header";
import {
  autoCompleteHeaderCode,
  basicHeaderCode,
  menuHeaderCode,
  mixedHeaderCode,
  navHeaderCode,
} from "@/rawCode/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function HeaderComponent() {
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showNavCode, setShowNavCode] = useState(false);
  const [showAutoCompleteCode, setShowAutoCompleteCode] = useState(false);
  const [showMenuCode, setShowMenuCode] = useState(false);
  const [showMixedCode, setShowMixedCode] = useState(false);

  return (
    <ComponentLayout componentType="Header">
      <div>
        <p className="font-mono text-lg font-bold pb-8">Basic Header</p>
        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            search={true}
            searchList={[
              { label: "Alabama", value: "AL" },
              { label: "Alaska", value: "AK" },
              { label: "Arizona", value: "AZ" },
              { label: "Arkansas", value: "AR" },
              { label: "California", value: "CA" },
            ]}
          />
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
            <CodeBlock code={basicHeaderCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">
          Header with Navigation items
        </p>
        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            headerLinks={["Home", "Products", "Account", "Support"]}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowNavCode(!showNavCode)}
          >
            Show code
          </button>
        </div>
        {showNavCode && (
          <div>
            <CodeBlock code={navHeaderCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">
          Header with a Search Autocomplete
        </p>
        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            headerLinks={["Home", "Products", "Account", "Support"]}
            search={true}
            searchList={[
              { label: "Alabama", value: "AL" },
              { label: "Alaska", value: "AK" },
              { label: "Arizona", value: "AZ" },
              { label: "Arkansas", value: "AR" },
              { label: "California", value: "CA" },
            ]}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowAutoCompleteCode(!showAutoCompleteCode)}
          >
            Show code
          </button>
        </div>
        {showAutoCompleteCode && (
          <div>
            <CodeBlock code={autoCompleteHeaderCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">Header with a Menu</p>
        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            headerLinks={["Home", "Products", "Account", "Support"]}
            menu={true}
            menuItems={["Profile", "Help", "Logout"]}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowMenuCode(!showMenuCode)}
          >
            Show code
          </button>
        </div>
        {showMenuCode && (
          <div>
            <CodeBlock code={menuHeaderCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold pb-8">
          Header with Search Autocomplete and Menu
        </p>
        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            headerLinks={["Home", "Products", "Account", "Support"]}
            menu={true}
            menuItems={["Profile", "Help", "Logout"]}
            search={true}
            searchList={[
              { label: "Alabama", value: "AL" },
              { label: "Alaska", value: "AK" },
              { label: "Arizona", value: "AZ" },
              { label: "Arkansas", value: "AR" },
              { label: "California", value: "CA" },
            ]}
          />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowMixedCode(!showMixedCode)}
          >
            Show code
          </button>
        </div>
        {showMixedCode && (
          <div>
            <CodeBlock code={mixedHeaderCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
