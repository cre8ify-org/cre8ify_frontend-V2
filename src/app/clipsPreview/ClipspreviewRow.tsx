"use client";

import { Img, Button, Input, Text } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import Link from "next/link";
import React from "react";

export default function ClipspreviewRow() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  return (
    <div>
      {" "}
      <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
        {" "}
        <Text
          size="textmd"
          as="p"
          className="!font-satisfy text-[32px] font-normal !text-white lg:text-[27px] md:text-[26px] sm:text-[24px]"
        >
          {" "}
          LoGo{" "}
        </Text>{" "}
        <div className="flex w-[74%] justify-between gap-5 self-end md:w-full md:flex-col">
          {" "}
          <Input
            className="search_border flex h-[48px] w-[64%] items-center justify-center gap-2 rounded-[24px] px-2.5 text-[16px] font-medium text-tech_silver-0 md:w-full"
            name="search"
            placeholder={`Search creators or topics`}
            value={searchBarValue2}
            onChange={(e) => setSearchBarValue2(e.target.value)}
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
              searchBarValue2?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue2("")}
                  height={24}
                  width={24}
                />
              ) : null
            }
          />{" "}
          <div className="flex gap-[30px]">
            {" "}
            <Button className="xe09exxxxx510_border flex h-[48px] min-w-[196px] flex-row items-center justify-center rounded-[24px] bg-gradient bg-clip-text px-[33px] text-center text-[16px] font-medium text-transparent lg:text-[13px] sm:px-4">
              {" "}
              0xE09Exxxxx510{" "}
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
                />
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
    </div>
  );
}
