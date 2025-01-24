import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userHandle?: React.ReactNode;
  followButtonText?: string;
  userDescription?: React.ReactNode;
}

export default function UserProfile4({
  userImage = "img_image_21.png",
  userName = "PlayToEarn Joe",
  userHandle = "@joeplays to earn",
  followButtonText = "Follow",
  userDescription = "Gaming guru turned blockchain explorer 🎮✨. Navigating the play-to-earn universe and sharing the treasures found along the way. Let’s redefine gaming economies together!",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch gap-4 flex-1`}
    >
      {" "}
      <div className="flex items-center justify-center self-stretch">
        {" "}
        <div className="flex flex-1 items-center gap-4">
          {" "}
          <div className="w-[8%] rounded-[32px] bg-black">
            <Img
              src={userImage}
              width={64}
              height={64}
              alt="Userimage"
              className="h-[64px] w-full rounded-[32px] object-cover sm:h-auto"
            />{" "}
          </div>{" "}
          <div className="flex flex-1 flex-col items-start gap-1 sm:gap-1">
            {" "}
            <Heading
              size="headings"
              as="h4"
              className="text-[24px] font-bold sm:text-[20px]"
            >
              {" "}
              {userName}{" "}
            </Heading>{" "}
            <Heading
              size="dm_sans_16"
              as="p"
              className="text-[16px] font-medium !text-tech_silver-0 sm:text-[13px]"
            >
              {" "}
              {userHandle}{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
        <Button className="flex h-[48px] min-w-[96px] flex-row items-center justify-center rounded-[24px] bg-gradient px-6 text-center text-[16px] font-medium text-midnight_black sm:px-5 sm:text-[13px]">
          {" "}
          {followButtonText}{" "}
        </Button>{" "}
      </div>{" "}
      <Heading
        size="dm_sans_16"
        as="p"
        className="w-full text-[16px] font-medium leading-6 sm:w-full sm:text-[13px]"
      >
        {" "}
        {userDescription}{" "}
      </Heading>{" "}
    </div>
  );
}
