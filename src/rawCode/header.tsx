export const basicHeaderCode = `
import { Header } from "@/components/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

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
`;

export const navHeaderCode = `
import { Header } from "@/components/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            headerLinks={["Home", "Products", "Account", "Support"]}
          />
        </div>
`;

export const autoCompleteHeaderCode = `
import { Header } from "@/components/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

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
`;

export const menuHeaderCode = `
import { Header } from "@/components/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

        <div className="flex flex-row justify-evenly">
          <Header
            logoTitle="Company Title"
            LogoIcon={BuildingStorefrontIcon}
            headerLinks={["Home", "Products", "Account", "Support"]}
            menu={true}
            menuItems={["Profile", "Help", "Logout"]}
          />
        </div>
`;

export const mixedHeaderCode = `
import { Header } from "@/components/header";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

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
`;
