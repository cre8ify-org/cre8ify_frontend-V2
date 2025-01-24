import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";

interface Props {
  className?: string;
  headerText?: React.ReactNode;
  fromAnyoneText?: React.ReactNode;
  peopleYouFollowText?: React.ReactNode;
}

export default function UserConnections({
  headerText = "People",
  fromAnyoneText = "From anyone",
  peopleYouFollowText = "People you follow",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start self-stretch gap-6 flex-1`}
    >
      {" "}
      <Heading size="headings" as="h4" className="text-[24px] font-bold">
        {" "}
        {headerText}{" "}
      </Heading>{" "}
      <div className="flex flex-col gap-4 self-stretch">
        {" "}
        <div className="flex justify-between gap-5">
          {" "}
          <Text as="p" className="text-[24px] font-normal !text-white">
            {" "}
            {fromAnyoneText}
          </Text>{" "}
          <Img
            src="img_contrast.svg"
            width={32}
            height={32}
            alt="Imageclass"
            className="h-[32px]"
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <div className="flex justify-between gap-5">
            {" "}
            <Text as="p" className="text-[24px] font-normal !text-white">
              {" "}
              {peopleYouFollowText}{" "}
            </Text>{" "}
            <Img
              src="img_contrast_white.svg"
              width={32}
              height={32}
              alt="Imageclass"
              className="h-[32px]"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
