import React from "react";
import { Img } from "../Img";

interface Props {
  className?: string;
  userImage?: string;
}

export default function UserProfileImage({
  userImage = "img_image_55.png",
  ...props
}: Props) {
  return (
    <div {...props} className={`bg-gradient rounded-2xl ${props.className}`}>
      <Img
        src={userImage}
        width={296}
        height={296}
        alt="User profile"
        className="w-full h-[296px] rounded-2xl object-cover"
      />
    </div>
  );
}
