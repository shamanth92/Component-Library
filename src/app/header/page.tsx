"use client";
import { Header } from "@/components/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

export default function HeaderComponent() {
  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 min-h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Header Component</p>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Header</p>
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">
            Header with Navigation items
          </p>
          <div className="flex flex-row justify-evenly">
            <Header
              logoTitle="Company Title"
              LogoIcon={BuildingStorefrontIcon}
              headerLinks={["Home", "Products", "Account", "Support"]}
            />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">
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
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Header with a Menu</p>
          <div className="flex flex-row justify-evenly">
            <Header
              logoTitle="Company Title"
              LogoIcon={BuildingStorefrontIcon}
              headerLinks={["Home", "Products", "Account", "Support"]}
              menu={true}
              menuItems={["Profile", "Help", "Logout"]}
            />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">
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
        </div>
      </div>
    </div>
  );
}
