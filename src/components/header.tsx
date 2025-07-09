"use client";
import { ComponentType, useState } from "react";
import { Autocomplete } from "./autocomplete";
import { Avatar } from "./avatar";

type Option = { value: string; label: string };

type HeaderProps = {
  logoTitle: string;
  LogoIcon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  menu?: boolean;
  menuItems?: string[];
  search?: boolean;
  searchList?: Option[];
  headerLinks?: string[];
};

export const Header = ({
  logoTitle,
  LogoIcon,
  search,
  searchList,
  headerLinks,
  menu,
  menuItems,
}: HeaderProps) => {
  const [searchField, setSearchField] = useState<string>("");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="h-20 w-full bg-sky-500 flex flex-row">
      <div className="flex flex-row  gap-4 items-center w-1/6 h-full p-4">
        {LogoIcon && <LogoIcon className="size-8 text-white cursor-pointer" />}
        <p className="font-mono font-bold text-2xl text-white">{logoTitle}</p>
      </div>
      {headerLinks && (
        <div className="flex flex-row justify-evenly w-1/2">
          {headerLinks.map((link) => (
            <button
              key={link}
              className="text-white font-mono font-bold text-lg cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>
      )}
      {search && searchList && (
        <div className="ml-auto flex items-center p-4">
          <Autocomplete
            value={searchField}
            options={searchList}
            onChange={setSearchField}
          />
        </div>
      )}
      {menu && (
        <div className="ml-auto flex items-center p-4">
          <div className="relative inline-block text-left">
            <button
              className="bg-sky-500 text-white px-4 py-2 rounded"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Avatar type="alpha" label="SK" />
            </button>

            {openMenu && (
              <ul className="absolute mt-2 w-40 bg-white border border-sky-500 rounded shadow-lg -right-4">
                {menuItems &&
                  menuItems.map((items) => (
                    <li key={items}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-sky-100 font-mono"
                      >
                        {items}
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
