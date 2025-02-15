import type React from "react";
import { Img } from "../Img";
import { Text } from "../Text";

interface Props {
  className?: string;
  videoImageSrc?: string;
  profileImageSrc?: string;
  profileName?: React.ReactNode;
}

export default function UserProfile({
  videoImageSrc = "image-1.png",
  profileImageSrc = "image-5.png",
  profileName = "Andy James",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`relative h-[284px] w-[170px] rounded-2xl border border-dark_gray ${props.className}`}
    >
      <Img
        src={videoImageSrc}
        width={170}
        height={284}
        alt="Video"
        className="rounded-2xl object-cover w-[170px] h-[ ]"
      />
      <div className="absolute bottom-4 left-0 right-0 mx-auto flex items-center gap-2 rounded-full bg-white px-2 py-1 w-[149px]">
        <Img
          src={profileImageSrc}
          width={32}
          height={32}
          alt="Profile"
          className="h-8 rounded-full object-cover"
        />
        <Text as="p" className="text-base font-medium text-black">
          {profileName}
        </Text>
      </div>
    </div>
  );
}
