"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CloseSVG } from "../Input/close";
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
          {CREATIFI_SVG().logo()}
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
                <Link href="/notification">
                  <Image
                    src="/images/notificationBell.png"
                    width={24}
                    height={24}
                    alt="notificationBell"
                  />
                </Link>
                <Link href="/profile">
                  <Image
                    src="/images/Frame 30139.png"
                    width={48}
                    height={48}
                    alt="User"
                    className="rounded-full object-cover"
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
