import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  timeAgo?: React.ReactNode;
  twitterHandle?: React.ReactNode;
  beatmyblack?: React.ReactNode;
  likesCount?: React.ReactNode;
  commentsCount?: React.ReactNode;
  favoritesCount?: React.ReactNode;
}

export default function UserProfilePost({
  userName = "Ching Lee",
  timeAgo = "-6hrs ago",
  twitterHandle = "@Leechingwall1",
  beatmyblack = "&lt;&gt;Beat my black background wallpaper&lt;br /&gt;Share your in comment👇&lt;/&gt;",
  likesCount = "56",
  commentsCount = "72",
  favoritesCount = "120",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch gap-6 flex-1`}
    >
      {" "}
      <div className="flex items-center justify-center self-stretch">
        {" "}
        <div className="flex flex-1 items-center gap-4">
          <div className="w-[6%] rounded-[28px] bg-black">
            {" "}
            <Img
              src="img_image.png"
              width={56}
              height={56}
              alt="Userimage"
              className="h-[56px] w-full rounded-[28px] object-cover sm:h-auto"
            />{" "}
          </div>{" "}
          <div className="flex flex-1 flex-col items-start gap-1.5 sm:gap-1.5">
            {" "}
            <div className="flex flex-wrap gap-[9px] self-stretch">
              {" "}
              <Heading
                size="headingxs"
                as="h5"
                className="text-[20px] font-bold sm:text-[17px]"
              >
                {" "}
                {userName}{" "}
              </Heading>{" "}
              <Text
                size="dm_sans_14"
                as="p"
                className="text-[20px] font-normal sm:text-[17px]"
              >
                {" "}
                {timeAgo}{" "}
              </Text>{" "}
            </div>{" "}
            <Text size="dm_sans_14" as="p" className="text-[14px] font-normal">
              {" "}
              {twitterHandle}{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
        <Img
          src="img_notification.svg"
          width={24}
          height={24}
          alt="Profileimage"
          className="h-[24px]"
        />{" "}
      </div>{" "}
      <div className="flex flex-col gap-8 self-stretch sm:gap-8">
        {" "}
        <div className="flex flex-col gap-6 sm:gap-6">
          <Text
            as="p"
            className="text-[24px] font-normal leading-8 !text-white sm:text-[20px]"
          >
            {" "}
            {beatmyblack}{" "}
          </Text>{" "}
          <div className="rounded-[16px] bg-black">
            {" "}
            <Img
              src="img_image_524x916.png"
              width={916}
              height={524}
              alt="Postimage"
              className="h-[524px] w-full rounded-[16px] object-cover sm:h-auto"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex items-center justify-center">
          {" "}
          <div className="flex gap-2">
            {" "}
            <Img
              src="img_settings.svg"
              width={32}
              height={32}
              alt="Image"
              className="h-[32px]"
            />{" "}
            <Heading
              size="texts"
              as="p"
              className="!font-montserrat text-[24px] font-medium sm:text-[20px]"
            >
              {" "}
              {likesCount}{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex gap-2 px-14 md:px-5">
            {" "}
            <Img
              src="img_thumbs_up.svg"
              width={32}
              height={32}
              alt="Image"
              className="h-[32px]"
            />{" "}
            <Heading
              size="texts"
              as="p"
              className="!font-montserrat text-[24px] font-medium sm:text-[20px]"
            >
              {" "}
              {commentsCount}{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex flex-1 gap-2 pl-[78px] pr-14 md:px-5">
            <Img
              src="img_favorite.svg"
              width={32}
              height={32}
              alt="Image"
              className="h-[32px]"
            />{" "}
            <Heading
              size="texts"
              as="p"
              className="!font-montserrat text-[24px] font-medium sm:text-[20px]"
            >
              {" "}
              {favoritesCount}{" "}
            </Heading>{" "}
          </div>{" "}
          <Img
            src="img_settings_cyan_400.svg"
            width={32}
            height={32}
            alt="Image"
            className="h-[32px]"
          />{" "}
          <Img
            src="img_streamline_bag_dollar_solid.png"
            width={40}
            height={40}
            alt="Additionalimage"
            className="ml-[156px] h-[40px] object-cover"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
