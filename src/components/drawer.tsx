"use client";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ComponentType, ReactNode, useEffect, useState } from "react";

type DrawerProps = {
  children: ReactNode;
  open: boolean;
  logout?: boolean;
  onClose: () => void;
  position?: string;
};

type DrawerTitleProps = {
  title: string;
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type SectionList = {
  options: string[];
  name: string;
  OptionIconList?: ComponentType<React.SVGProps<SVGSVGElement>>[];
};

type DrawerOptionsProps = {
  optionList?: string[];
  OptionIcon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  OptionIconList?: ComponentType<React.SVGProps<SVGSVGElement>>[];
  sections?: boolean;
  sectionList?: SectionList[];
};

export const Drawer = ({
  children,
  open,
  logout,
  onClose,
  position = "left",
}: DrawerProps) => {
  const [openDrawer, setOpenDrawer] = useState(open);

  useEffect(() => {
    setOpenDrawer(open);
  }, [open]);

  const drawerVisibility = () => {
    onClose();
    setOpenDrawer(false);
  };

  return (
    open && (
      <div
        className={`
    fixed inset-0 z-40 bg-black/30 transition-opacity duration-300
    ${
      openDrawer
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
        onClick={() => drawerVisibility()}
      >
        <div
          className={`h-screen w-75 fixed border-x border-sky-300 shadow-lg bg-sky-500 fixed top-0 ${
            position === "left" ? "left-0" : "right-0"
          } z-50 transform transition-transform duration-300 ease-in-out ${
            openDrawer
              ? "translate-x-0"
              : position === "left"
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex-1 overflow-y-auto thin-scrollbar">
              {children}
            </div>
            {logout && (
              <div className="flex justify-center gap-2 w-full items-center px-4 pb-6 cursor-pointer">
                <p className="font-mono text-xl text-white">Logout</p>
                <ArrowLeftEndOnRectangleIcon className="size-6 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export const SideBarTitle = ({ title, Icon }: DrawerTitleProps) => {
  return (
    <div className="flex flex-row gap-2 pt-8 pb-8 pl-2">
      {Icon && <Icon className="size-8 text-white cursor-pointer" />}
      <p className="font-mono font-bold text-2xl text-white">{title}</p>
    </div>
  );
};

export const SideBarOptions = ({
  optionList,
  OptionIcon,
  OptionIconList,
  sections,
  sectionList,
}: DrawerOptionsProps) => {
  return sections ? (
    <ul className="flex flex-col gap-4 items-center">
      {sectionList?.map((item) => (
        <div key={item.name}>
          <p className="font-mono text-xl text-white">{item.name}</p>
          {item.options.map((option, j) => {
            const Icon = item?.OptionIconList?.[j];
            return (
              <li
                key={`${item.name}-${option}`}
                className="font-mono text-white cursor-pointer text-lg hover:bg-sky-100 hover:text-sky-700 px-4 py-2 rounded w-full max-w-[150px] text-left"
              >
                <div className="flex gap-2 items-center w-full">
                  {Icon && <Icon className="size-4" />}
                  <Link href={`/${option?.toLowerCase()}`}>{option}</Link>
                </div>
              </li>
            );
          })}
        </div>
      ))}
    </ul>
  ) : (
    <ul className="flex flex-col gap-4 items-center">
      {optionList?.map((item, i) => {
        const Icon = OptionIconList?.[i] || OptionIcon;
        return (
          <li
            key={item}
            className="font-mono text-white cursor-pointer text-lg hover:bg-sky-100 hover:text-sky-700 px-4 py-2 rounded w-full max-w-[150px] text-left"
          >
            <div className="flex gap-2 items-center w-full">
              {Icon && <Icon className="size-4" />}
              {item}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
