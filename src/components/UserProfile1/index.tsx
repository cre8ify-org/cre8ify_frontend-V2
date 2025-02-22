import type React from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";

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
      className={`flex items-center justify-between ${props.className}`}
    >
      <div className="flex items-center gap-4">
        <Img
          src={userImage}
          width={56}
          height={56}
          alt="User avatar"
          className="rounded-full"
          style={{ borderRadius: "9999px" }}
        />
        <div className="flex flex-col">
          <Heading as="h4" className="text-xl font-bold">
            {userName}
          </Heading>
          <Heading as="p" className="text-base font-medium text-tech_silver-1">
            {userHandle}
          </Heading>
        </div>
      </div>
      <Button className="h-12 min-w-[96px] rounded-[56px] bg-gradient px-6 text-base font-medium text-midnight_black">
        {follow}
      </Button>
    </div>
  );
}
