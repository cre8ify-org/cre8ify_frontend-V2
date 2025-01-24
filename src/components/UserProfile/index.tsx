import { Heading } from "../Heading";
import { Img } from "../Img";
import React from "react";

interface Props {
  className?: string;
  videoImageSrc?: string;
  profileImageSrc?: string;
  profileName?: React.ReactNode;
}

export default function UserProfile({
  videoImageSrc = "img_image_4.png",
  profileImageSrc = "img_image_5.png",
  profileName = "Andy James",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} h-[284px] w-[24%] lg:h-auto md:w-full md:h-auto border-dark_gray border border-solid relative rounded-[16px]`}
    >
      {" "}
      <Img
        src={videoImageSrc}
        width={188}
        height={284}
        alt="Videoimage"
        className="h-[284px] w-full flex-1 rounded-[16px] object-cover"
      />
      <div className="absolute bottom-4 left-0 right-0 mx-auto flex items-center gap-2 rounded-[20px] bg-white">
        {" "}
        <Img
          src={profileImageSrc}
          width={32}
          height={32}
          alt="Profileimage"
          className="h-[32px] rounded-[16px] object-cover"
        />{" "}
        <Heading
          size="dm_sans_16"
          as="p"
          className="text-[16px] font-medium !text-black"
        >
          {" "}
          {profileName}{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
