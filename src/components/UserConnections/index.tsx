import type React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";

interface Props {
  className?: string;
  headerText?: React.ReactNode;
  fromAnyoneText?: React.ReactNode;
  peopleYouFollowText?: React.ReactNode;
}

export default function UserConnections({
  headerText = "People",
  fromAnyoneText = "From anyone",
  peopleYouFollowText = "People you follow",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`flex flex-col items-start gap-6 ${props.className}`}
    >
      <Heading as="h4" className="text-2xl font-bold">
        {headerText}
      </Heading>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <Text as="p" className="text-2xl font-normal text-white">
            {fromAnyoneText}
          </Text>
          <Img
            src="img_contrast.svg"
            width={32}
            height={32}
            alt="From anyone"
            className="h-8"
          />
        </div>
        <div className="flex justify-between items-center">
          <Text as="p" className="text-2xl font-normal text-white">
            {peopleYouFollowText}
          </Text>
          <Img
            src="img_contrast_white.svg"
            width={32}
            height={32}
            alt="People you follow"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
}
