"use client";

import React from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { CREATIFI_SVG } from "@/assets/svg";
import { Button } from "../Button";
import Link from "next/link";
import { Text } from "../Text";
import { NavBarLinks } from "@/lib/config/site";

interface Props {
  className?: string;
}

export default function Sidebar2({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="110px"
      collapsedWidth="80px"
      collapsed={collapsed}
      className={`flex flex-col h-[88vh] pt-2 top-0 !border-r-dark_gray bg-midnight_black sticky overflow-auto md:hidden ${props.className}`}
    >
      <Menu className="w-full">
        <div className="flex flex-col gap-2 items-center">
          <div>Menu</div>
          {NavBarLinks.map((link) => (
            <Link
              href={link.link}
              key={link.link}
              className="py-[20px] flex flex-col items-center text-tech_silver-1 text-[14px]"
            >
              {link.icon}
              {link.name}
              {/* <Text className="text-tech_silver-1"></Text> */}
            </Link>
          ))}
        </div>
        <div className="mx-3 h-px bg-blue_gray-900" />
        <div className="mt-[30px]">
          <MenuItem>{CREATIFI_SVG().createIcon()}</MenuItem>
        </div>
        <div className="mt-[116px]">
          <MenuItem>{CREATIFI_SVG().logoutIcon()}</MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
