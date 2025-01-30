import type React from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";

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
  userDescription = "Gaming guru turned blockchain explorer 🎮✨. Navigating the play-to-earn universe and sharing the treasures found along the way. Let's redefine gaming economies together!",
  ...props
}: Props) {
  return (
    <div {...props} className={`flex flex-col gap-4 ${props.className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Img
            src={userImage}
            width={64}
            height={64}
            alt="User avatar"
            className="rounded-full"
          />
          <div>
            <Heading as="h4" className="text-2xl font-bold">
              {userName}
            </Heading>
            <Heading
              as="p"
              className="text-base font-medium text-tech_silver-0"
            >
              {userHandle}
            </Heading>
          </div>
        </div>
        <Button className="h-12 min-w-[96px] rounded-full bg-gradient px-6 text-base font-medium text-midnight_black">
          {followButtonText}
        </Button>
      </div>
      <Heading as="p" className="text-base font-medium leading-6">
        {userDescription}
      </Heading>
    </div>
  );
}
