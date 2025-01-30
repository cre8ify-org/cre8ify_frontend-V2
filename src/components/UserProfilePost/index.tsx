import type React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";

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
  timeAgo = "- 6hrs ago",
  twitterHandle = "@Leechingwall1",
  beatmyblack = (
    <>
      Beat my black background wallpaper
      <br />
      Share your in comment👇
    </>
  ),
  likesCount = "56",
  commentsCount = "72",
  favoritesCount = "120",
  ...props
}: Props) {
  return (
    <div {...props} className={`flex flex-col gap-6 ${props.className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Img
            src="img_image.png"
            width={56}
            height={56}
            alt="User avatar"
            className="rounded-full"
          />
          <div>
            <div className="flex gap-2 items-center">
              <Heading as="h5" className="text-lg font-bold text-white">
                {userName}
              </Heading>
              <Text as="p" className="text-md text-tech_silver-1 font-normal">
                {timeAgo}
              </Text>
            </div>
            <Text as="p" className="text-sm text-tech_silver-1 font-normal">
              {twitterHandle}
            </Text>
          </div>
        </div>
        <Img
          src="img_notification.svg"
          width={24}
          height={24}
          alt="Notification"
          className="h-6"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <Text as="p" className="text-lg leading-8 text-white">
            {beatmyblack}
          </Text>
          <Img
            src="img_image_524x916.png"
            width={916}
            height={524}
            alt="Post image"
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Img
              src="img_settings.svg"
              width={32}
              height={32}
              alt="Settings"
              className="h-8"
            />
            <Heading as="p" className="text-lg font-medium font-montserrat">
              {likesCount}
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src="img_thumbs_up.svg"
              width={32}
              height={32}
              alt="Comments"
              className="h-8"
            />
            <Heading as="p" className="text-lg font-medium font-montserrat">
              {commentsCount}
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img
              src="img_favorite.svg"
              width={32}
              height={32}
              alt="Favorites"
              className="h-8"
            />
            <Heading as="p" className="text-lg font-medium font-montserrat">
              {favoritesCount}
            </Heading>
          </div>
          <Img
            src="img_settings_cyan_400.svg"
            width={32}
            height={32}
            alt="Share"
            className="h-8"
          />
          <Img
            src="img_streamline_bag_dollar_solid.png"
            width={40}
            height={40}
            alt="Tip"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}
