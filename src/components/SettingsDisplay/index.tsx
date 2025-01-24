import { Img } from "../Img";
import { Heading } from "../Heading";
import React from "react";
interface Props {
  className?: string;
  settingsImage?: string;
  settingsText?: React.ReactNode;
}
export default function SettingsDisplay({
  settingsImage = "img_settings.svg",
  settingsText = "56",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-2`}>
      {" "}
      <Img
        src={settingsImage}
        width={32}
        height={32}
        alt="Settingsimage"
        className="h-[32px]"
      />{" "}
      <Heading
        size="texts"
        as="p"
        className="!font-montserrat text-[24px] font-medium"
      >
        {" "}
        {settingsText}{" "}
      </Heading>{" "}
    </div>
  );
}
