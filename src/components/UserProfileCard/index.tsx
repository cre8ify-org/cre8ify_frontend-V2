import type React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  timeAgo?: React.ReactNode;
  userHandle?: React.ReactNode;
  description?: React.ReactNode;
  settingsCount?: React.ReactNode;
  thumbsUpCount?: React.ReactNode;
  favoriteCount?: React.ReactNode;
}

export default function UserProfileCard({
  userName = "The Bitcoin Liberator",
  timeAgo = "-6hrs ago",
  userHandle = "@Boldbitcoin",
  description = "Michael Saylor's breakdown of #Bitcoin's potential to $13 million? That's the kind of long-term thinking we need. Exciting times ahead!",
  settingsCount = "56",
  thumbsUpCount = "72",
  favoriteCount = "120",
  ...props
}: Props) {
  return (
    <div {...props} className={`flex flex-col gap-10 ${props.className}`}>
      <div className="h-0.5 w-full bg-dark_gray" />
      <div className="flex flex-col gap-6">
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
              <div className="flex gap-2">
                <Heading as="h5" className="text-xl font-bold">
                  {userName}
                </Heading>
                <Text as="p" className="text-xl">
                  {timeAgo}
                </Text>
              </div>
              <Text as="p" className="text-sm">
                {userHandle}
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
          <Text as="p" className="text-2xl leading-8 text-white">
            {description}
          </Text>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Img
                src="img_settings.svg"
                width={32}
                height={32}
                alt="Settings"
                className="h-8"
              />
              <Heading as="p" className="text-2xl font-medium font-montserrat">
                {settingsCount}
              </Heading>
            </div>
            <div className="flex items-center gap-2">
              <Img
                src="img_thumbs_up.svg"
                width={32}
                height={32}
                alt="Thumbs up"
                className="h-8"
              />
              <Heading as="p" className="text-2xl font-medium font-montserrat">
                {thumbsUpCount}
              </Heading>
            </div>
            <div className="flex items-center gap-2">
              <Img
                src="img_favorite.svg"
                width={32}
                height={32}
                alt="Favorite"
                className="h-8"
              />
              <Heading as="p" className="text-2xl font-medium font-montserrat">
                {favoriteCount}
              </Heading>
            </div>
            <Img
              src="img_settings_cyan_400.svg"
              width={32}
              height={32}
              alt="Settings"
              className="h-8"
            />
            <Img
              src="img_streamline_bag_dollar_solid.png"
              width={40}
              height={40}
              alt="Bag"
              className="h-10"
            />
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-dark_gray" />
    </div>
  );
}
