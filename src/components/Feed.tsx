import React from "react";
import { Img } from "./Img";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./Button";
import UserProfilePost from "@/components/UserProfilePost";

export default function Feed() {
  return (
    <div className="flex flex-1 flex-col items-start self-center md:self-stretch md:px-5">
      <FeedHeader />
      <PostInput />
      <FeedContent />
    </div>
  );
}

function FeedHeader() {
  return (
    <div className="flex items-center self-stretch sm:flex-col">
      <Heading
        as="h1"
        className="!font-montserrat text-3xl font-bold sm:text-2xl"
      >
        Feeds
      </Heading>
      <div className="flex flex-1 flex-wrap justify-end gap-6 pl-14 pr-[72px] lg:pr-8 md:px-5 sm:self-stretch sm:px-4">
        <Text as="p" className="text-2xl font-normal lg:text-xl">
          Recents
        </Text>
        <Heading as="h2" className="text-2xl font-bold !text-grey_1 lg:text-xl">
          Following
        </Heading>
        <a
          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as="p" className="text-2xl font-normal lg:text-xl">
            Popular
          </Text>
        </a>
      </div>
    </div>
  );
}

function PostInput() {
  return (
    <div className="mt-6 flex w-[92%] justify-center rounded-[16px] border border-solid border-dark_gray bg-midnight_black p-4 lg:w-full md:w-full">
      <div className="flex w-full flex-col gap-[18px]">
        <div className="flex items-center gap-[23px] rounded-[28px] border border-solid border-dark_gray bg-midnight_black p-2">
          <Img
            src="/img_image_1_40x40.png"
            width={40}
            height={40}
            alt="User avatar"
            className="h-[40px] rounded-[20px] object-cover"
          />
          <Text className="text-xl font-normal lg:text-lg">
            What's on your mind?
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-6">
            {[
              "gallery",
              "voice_square",
              "music",
              "emoji_normal",
              "vuesax_bold_location",
            ].map((icon) => (
              <Img
                key={icon}
                src={`/img_${icon}.png`}
                width={32}
                height={32}
                alt={icon}
                className="h-[32px] object-cover"
              />
            ))}
          </div>
          <Button className="h-12 min-w-[80px] rounded-full bg-gradient px-6 text-center text-base font-medium text-midnight_black sm:px-4">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

function FeedContent() {
  return (
    <div className="mr-[72px] mt-[74px] flex flex-col gap-10 self-stretch md:mr-0">
      <a
        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UserProfilePost />
      </a>
      <div className="h-[2px] w-[916px] bg-dark_gray" />
      <UserProfilePost />
    </div>
  );
}
