import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";

interface Props {
  className?: string;
}

export default function TrendingsearchLatestUserprofile({ ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch gap-6 flex-1`}
    >
      {" "}
      <div className="flex items-center justify-center self-stretch">
        {" "}
        <div className="flex flex-1 items-center gap-4">
          {" "}
          <div className="w-[6%] rounded-[28px] bg-black">
            {" "}
            <Img
              src="img_image_26.png"
              width={56}
              height={56}
              alt="Userimage"
              className="h-[56px] w-full rounded-[28px] object-cover sm:h-auto"
            />{" "}
          </div>{" "}
          <div className="flex flex-1 flex-col items-start gap-1 sm:gap-1">
            {" "}
            <div className="flex flex-wrap gap-2 self-stretch">
              {" "}
              <Heading
                size="headingxs"
                as="h5"
                className="text-[20px] font-bold sm:text-[17px]"
              >
                {" "}
                Cameron Earnville{" "}
              </Heading>{" "}
              <Text
                size="dm_sans_14"
                as="p"
                className="text-[20px] font-normal sm:text-[17px]"
              >
                {" "}
                -5hrs ago{" "}
              </Text>{" "}
            </div>{" "}
            <Text size="dm_sans_14" as="p" className="text-[14px] font-normal">
              {" "}
              @EarnvilleCameron{" "}
            </Text>{" "}
          </div>{" "}
        </div>
        <Img
          src="img_notification.svg"
          width={24}
          height={24}
          alt="Notificationima"
          className="h-[24px]"
        />{" "}
      </div>{" "}
      <div className="flex flex-col gap-8 self-stretch sm:gap-8">
        {" "}
        <div className="flex flex-col gap-6 sm:gap-6">
          {" "}
          <Text
            as="p"
            className="text-[24px] font-normal leading-8 !text-white sm:text-[20px]"
          >
            {" "}
            <>
              {" "}
              Diving deep into EtherWorld and just unlocked a legendary
              artifact! 🔮 The play-to-earn mechanics are insanely rewarding. If
              you haven&#39;t checked it out yet, now&#39;s the time! Let&#39;s
              build, play, and earn decentralized riches together. 🚀🌌 <br />{" "}
              #PlayToEarn #NFTGaming #Ethereum #Blockchain{" "}
            </>{" "}
          </Text>{" "}
          <div className="rounded-[16px] bg-gray-900_01">
            {" "}
            <Img
              src="img_image_560x916.png"
              width={916}
              height={560}
              alt="Postimage"
              className="h-[560px] w-full rounded-[16px] object-cover sm:h-auto"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex gap-[156px]">
          {" "}
          <div className="flex w-[24%] gap-2">
            <Img
              src="img_settings.svg"
              width={32}
              height={32}
              alt="Userimage"
              className="h-[32px]"
            />{" "}
            <Heading
              size="texts"
              as="p"
              className="!font-montserrat text-[24px] font-medium sm:text-[20px]"
            >
              {" "}
              56{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex w-[24%] gap-2">
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
              72{" "}
            </Heading>{" "}
          </div>{" "}
          <div className="flex w-[26%] gap-2">
            {" "}
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
              120{" "}
            </Heading>{" "}
          </div>{" "}
          <Img
            src="img_settings_cyan_400.svg"
            width={32}
            height={32}
            alt="Image"
            className="h-[32px] w-[10%] object-contain"
          />
          <Img
            src="img_streamline_bag_dollar_solid.png"
            width={40}
            height={40}
            alt="Image56"
            className="h-[40px] w-[14%] object-contain"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
