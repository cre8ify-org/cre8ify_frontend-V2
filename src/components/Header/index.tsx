"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { CloseSVG } from "../Input/close";
import { Img } from "../Img";
import { Input } from "../Input";
import { Wallet } from "../Wallet";
import { CREATIFI_SVG } from "../../assets/svg";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <header
      {...props}
      className={`py-3.5 border-b border-dark_gray bg-midnight_black ${props.className}`}
    >
      <div className="flex justify-center">
        <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col">
          <Img
            src="img_header_logo.png"
            width={66}
            height={54}
            alt="Header logo"
            className="h-[54px] w-[66px] object-contain"
          />
          <div className="flex w-3/4 justify-between gap-5 md:w-full md:flex-col">
            <Input
              className="search_border flex h-12 w-2/3 items-center justify-center gap-2 rounded-full px-2.5 text-base font-medium text-tech_silver-0 md:w-full"
              name="search"
              placeholder="Search creators or topics"
              value={searchBarValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchBarValue(e.target.value)
              }
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                padding: "0px",
              }}
              prefix={CREATIFI_SVG().searchIcon()}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue("")}
                    height={24}
                    width={24}
                  />
                ) : null
              }
            />
            <div className="flex gap-[30px]">
              <Wallet>Connect Wallet</Wallet>
              <div className="flex items-center gap-6">
                <Link href="#">{CREATIFI_SVG().notificationBell()}</Link>
                <Link href="#">
                  <Img
                    src="img_image_1.png"
                    width={48}
                    height={48}
                    alt="User"
                    className="h-12 rounded-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
