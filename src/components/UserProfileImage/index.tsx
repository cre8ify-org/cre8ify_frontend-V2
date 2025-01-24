import { Img } from "../Img";

import React from "react";
interface Props {
  className?: string;
  userImage?: string;
}

export default function UserProfileImage({
  userImage = "img_image_55.png",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full bg-gradient rounded-[16px]`}
    >
      {" "}
      <Img
        src={userImage}
        width={296}
        height={296}
        alt="Imagefiftyfive"
        className="h-[296px] w-full rounded-[16px] object-cover"
      />{" "}
    </div>
  );
}
