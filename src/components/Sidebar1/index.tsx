"use client";
import React from "react";
import { Img } from "../Img";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="104px"
      collapsedWidth="80px"
      collapsed={collapsed}
      className={`flex flex-col h-screen pt-2 top-0 left-0 border-r border-dark_gray bg-midnight_black shadow-xs sticky overflow-auto md:hidden ${props.className}`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "24px",
            boxShadow: "0 8px 16px 0 #0000003d",
            backgroundColor: "#121212",
            color: "#b0b0b0",
            fontWeight: 400,
            fontSize: "14px",
          },
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-2">
          <MenuItem>Menu</MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_user.svg"
                width={32}
                height={32}
                alt="User"
                className="h-8 w-8"
              />
            }
          />
          <MenuItem>Explore</MenuItem>
          <MenuItem>Notification</MenuItem>
          <MenuItem>Wallet</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Setting</MenuItem>
        </div>
        <div className="mx-3 h-px bg-blue_gray-900" />
        <div className="mt-[30px]">
          <MenuItem>
            <div className="flex flex-col items-center rounded-[32px] bg-gradient py-3 pr-3">
              <Img
                src="img_plus.svg"
                width={32}
                height={32}
                alt="Plus"
                className="mt-2 h-8 w-8"
              />
            </div>
          </MenuItem>
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
