import type React from "react";
import { Img } from "../Img";
import { Heading } from "../Heading";

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
    <div {...props} className={`flex items-center gap-2 ${props.className}`}>
      <Img
        src={settingsImage}
        width={32}
        height={32}
        alt="Settings"
        className="h-8"
      />
      <Heading as="p" className="text-2xl font-medium font-montserrat">
        {settingsText}
      </Heading>
    </div>
  );
}
