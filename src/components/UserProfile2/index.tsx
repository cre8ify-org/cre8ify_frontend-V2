import { Text } from "../Text";
import { Img } from "../Img";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userStatus?: React.ReactNode;
}

export default function UserProfile2({
  userImage = "img_image_12.png",
  userName = "RainbowKit",
  userStatus = "Detected",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center self-stretch p-2 flex-1 rounded-[16px]`}
    >
      {" "}
      <div className="flex flex-1 items-center gap-6">
        {" "}
        <div className="w-[16%] rounded-[16px] bg-dark_gray">
          <Img
            src={userImage}
            width={64}
            height={64}
            alt="Image"
            className="h-[64px] w-full rounded-[16px] object-cover"
          />{" "}
        </div>{" "}
        <Text as="p" className="text-[24px] font-normal !text-white">
          {" "}
          {userName}{" "}
        </Text>{" "}
      </div>{" "}
      <Text
        size="dm_sans_14"
        as="p"
        className="flex items-center justify-center rounded-lg bg-blue-900 px-2 py-0.5 text-[20px] font-normal !text-white"
      >
        {" "}
        {userStatus}{" "}
      </Text>{" "}
    </div>
  );
}
