"use client";

import { CloseSVG } from "../Input/close";
import { Img } from "../Img";
import { Button } from "../Button";
import { Input } from "../Input";
import { Wallet } from "@/components/Wallet";
import Link from "next/link";
import React from "react";


interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} py-3.5 border-dark_gray border-b border-solid bg-midnight_black shadow-md`}
    >
      <div className="flex w-full justify-center">
        <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
          <Img
            src="img_header_logo.png"
            width={66}
            height={54}
            alt="Headerlogo"
            className="h-[54px] w-[66px] object-contain"
          />{" "}
          <div className="flex w-[74%] justify-between gap-5 self-end md:w-full md:flex-col">
            {" "}
            <Input
              className="search_border flex h-[48px] w-[64%] items-center justify-center gap-2 rounded-[24px] px-2.5 text-[16px] font-medium text-tech_silver-0 md:w-full"
              name="search"
              placeholder={`Search creators or topics`}
              value={searchBarValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBarValue(e.target.value)}
              prefix={
                <Img
                  src="img_searchnormal.png"
                  width={24}
                  height={24}
                  alt="Search-normal"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue("")}
                    height={24}
                    width={24}
                  />
                ) : null
              }
            />{" "}
            <div className="flex gap-[30px]">
              {" "}
              <Button className="flex h-[48px] min-w-[196px] flex-row items-center justify-center rounded-[24px] bg-gradient px-[34px] text-center text-[16px] font-medium text-midnight_black lg:text-[13px] sm:px-4">
                {" "}
                Connect Wallet{" "}
              </Button>{" "}
              <div className="flex items-center gap-6">
                {" "}
                <Link href="#">
                  {" "}
                  <Img
                    src="img_notification_bing.png"
                    width={24}
                    height={24}
                    alt="Notification"
                    className="h-[24px] object-cover"
                  />{" "}
                </Link>{" "}
                <Link href="#">
                  {" "}
                  <Img
                    src="img_image_1.png"
                    width={48}
                    height={48}
                    alt="Imageone"
                    className="h-[48px] rounded-[24px] object-cover"
                  />{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
