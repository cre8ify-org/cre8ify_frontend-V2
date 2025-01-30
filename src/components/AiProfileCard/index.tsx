import type React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";

interface Props {
  className?: string;
  userImage?: string;
  titleText?: React.ReactNode;
  authorName?: React.ReactNode;
  viewsCount?: React.ReactNode;
  duration?: React.ReactNode;
}

export default function AiProfileCard({
  userImage = "img_frame_1000006121.png",
  titleText = "Most Powerful Ai around",
  authorName = "By Carl James",
  viewsCount = "1.9M views",
  duration = "2weeeks",
  ...props
}: Props) {
  return (
    <div {...props} className={`flex items-center gap-6 ${props.className}`}>
      <Img
        src={userImage}
        width={268}
        height={168}
        alt="AI Profile"
        className="h-[168px] w-[52%] rounded-[16px] object-contain"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <Heading as="h2" className="text-3xl font-bold leading-10">
            {titleText}
          </Heading>
          <Text as="p" className="text-2xl text-white">
            {authorName}
          </Text>
        </div>
        <div className="flex justify-between gap-5">
          <Text as="p" className="text-2xl text-white">
            {viewsCount}
          </Text>
          <Text as="p" className="text-2xl text-white">
            {duration}
          </Text>
        </div>
      </div>
    </div>
  );
}
