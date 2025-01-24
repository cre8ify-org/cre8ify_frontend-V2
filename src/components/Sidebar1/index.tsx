"use client";
import { Img } from "../Img";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
interface Props {
  className?: string;
}
export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="106px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col self-center h-screen pt-2 top-0 !border-dark_gray !border-r !border-solid bg-midnight_black shadow-xs !sticky overflow-auto md:hidden`}
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
        className="w-full self-stretch"
      >
        {" "}
        <div className="flex flex-col gap-2">
          {" "}
          <MenuItem>Menu</MenuItem>{" "}
          <MenuItem
            icon={
              <Img
                src="img_user.svg"
                width={32}
                height={32}
                alt="User"
                className="h-[32px] w-[32px]"
              />
            }
          />{" "}
          <MenuItem>Explore</MenuItem> <MenuItem>Notification</MenuItem>{" "}
          <MenuItem>Wallet</MenuItem> <MenuItem>Profile</MenuItem>{" "}
          <MenuItem>Setting</MenuItem>{" "}
        </div>
        <div className="mx-3 h-px bg-blue_gray-900" />
        <div className="mt-[30px]">
          {" "}
          <MenuItem>
            {" "}
            <div className="flex flex-col items-center rounded-[32px] bg-gradient py-3 pr-3">
              {" "}
              <Img
                src="img_plus.svg"
                width={32}
                height={32}
                alt="Plus"
                className="mt-2 h-[32px] w-[32px]"
              />{" "}
            </div>{" "}
          </MenuItem>{" "}
        </div>{" "}
        <div className="mt-[116px]">
          {" "}
          <MenuItem
            icon={
              <Img
                src="img_arrow_down.svg"
                width={40}
                height={40}
                alt="Arrowdown"
                className="h-[40px] w-[40px]"
              />
            }
          />{" "}
        </div>{" "}
      </Menu>{" "}
    </Sidebar>
  );
}
