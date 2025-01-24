import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  titleText?: React.ReactNode;
  authorName?: React.ReactNode;
  viewsCount?: React.ReactNode;
  duration?: React.ReactNode;
}

export default function AiProfileCard({
  userImage = "img_frame_1000006121.png",
  titleText = "Most Powerful Ai around",
  authorName = "By Carl James",
  viewsCount = "1.9M views",
  duration = "2weeeks",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch gap-6 flex-1`}
    >
      {" "}
      <Img
        src={userImage}
        width={268}
        height={168}
        alt="Mostpowerfulaii"
        className="h-[168px] w-[52%] rounded-[16px] object-contain"
      />{" "}
      <div className="flex flex-1 flex-col gap-4 sm:self-stretch">
        {" "}
        <div className="flex flex-col items-start gap-2">
          {" "}
          <Heading as="h2" className="w-full text-[32px] font-bold leading-10">
            {" "}
            {titleText}{" "}
          </Heading>{" "}
          <Text as="p" className="text-[24px] font-normal !text-white">
            {" "}
            {authorName}{" "}
          </Text>{" "}
        </div>{" "}
        <div className="flex flex-wrap justify-between gap-5">
          {" "}
          <Text as="p" className="text-[24px] font-normal !text-white">
            {" "}
            {viewsCount}{" "}
          </Text>{" "}
          <Text as="p" className="text-[24px] font-normal !text-white">
            {" "}
            {duration}{" "}
          </Text>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
