import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userHandle?: React.ReactNode;
  follow?: string;
}

export default function UserProfile1({
  userImage = "img_image_56x56.png",
  userName = "Ching Lee",
  userHandle = "@Leechingwall1",
  follow = "Follow",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center self-stretch flex-1`}
    >
      {" "}
      <div className="flex flex-1 items-center sm:self-stretch">
        {" "}
        <div className="w-[14%] rounded-[32px] bg-black">
          {" "}
          <Img
            src={userImage}
            width={56}
            height={56}
            alt="Userimage"
            className="h-[56px] w-full object-cover"
          />{" "}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1 px-4">
          {" "}
          <Heading size="headings" as="h4" className="text-[24px] font-bold">
            {" "}
            {userName}{" "}
          </Heading>{" "}
          <Heading
            size="dm_sans_16"
            as="p"
            className="text-[16px] font-medium !text-tech_silver-0"
          >
            {" "}
            {userHandle}{" "}
          </Heading>{" "}
        </div>{" "}
      </div>{" "}
      <Button className="flex h-[48px] min-w-[96px] flex-row items-center justify-center rounded-[24px] bg-gradient px-6 text-center text-[16px] font-medium text-midnight_black sm:px-5">
        {" "}
        {follow}{" "}
      </Button>{" "}
    </div>
  );
}
