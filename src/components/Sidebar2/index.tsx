"use client";

import React from "react";
import { Img } from "../Img";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { CREATIFI_SVG } from "@/assets/svg";
import { Button } from "../Button";
import Link from "next/link";

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
      <Menu
        menuItemStyles={{
          button: {
            padding: "24px",
            backgroundColor: "#121212",
            color: "#b0b0b0",
            fontWeight: 400,
            fontSize: "14px",
          },
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-2">
          <div>Menu</div>
          <Link href="#">
            <MenuItem icon={CREATIFI_SVG().homeIcon()} />
          </Link>
          <MenuItem>Explore</MenuItem>
          <MenuItem>Notification</MenuItem>
          <MenuItem>Wallet</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Setting</MenuItem>
        </div>
        <div className="mx-3 h-px bg-blue_gray-900" />
        <div className="mt-[30px]">
          <MenuItem
            icon={
              <Img
                src="img_plus.svg"
                width={32}
                height={32}
                alt="Plus"
                className="h-8 w-8"
              />
            }
          />
        </div>
        <div className="mt-[116px]">
          <MenuItem
            icon={
              <Img
                src="img_arrow_down.svg"
                width={40}
                height={40}
                alt="Arrow down"
                className="h-10 w-10"
              />
            }
          />
        </div>
      </Menu>
    </Sidebar>
  );
}
