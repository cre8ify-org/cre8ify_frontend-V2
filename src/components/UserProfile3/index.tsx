import type React from "react"
import { Img } from "../Img"
import { Text } from "../Text"
import { Heading } from "../Heading"

interface Props {
  className?: string
  userImage?: string
  userName?: React.ReactNode
  timeAgo?: React.ReactNode
  userHandle?: React.ReactNode
  winnerText?: React.ReactNode
  settingsText?: React.ReactNode
  thumbsUpText?: React.ReactNode
  favoriteText?: React.ReactNode
}

export default function UserProfile3({
  userImage = "img_image_18.png",
  userName = "Mr M",
  timeAgo = "-5hrs ago",
  userHandle = "@mr.mmmmm",
  winnerText = "This is a winner",
  settingsText = "56",
  thumbsUpText = "72",
  favoriteText = "120",
  ...props
}: Props) {
  return (
    <div {...props} className={`flex flex-col gap-4 ${props.className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Img src={userImage} width={56} height={56} alt="User avatar" className="rounded-full" />
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
        <Img src="img_notification.svg" width={24} height={24} alt="Notification" className="h-6" />
      </div>
      <div className="flex flex-col gap-6">
        <Text as="p" className="text-2xl text-white">
          {winnerText}
        </Text>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Img src="img_settings.svg" width={32} height={32} alt="Settings" className="h-8" />
            <Heading as="p" className="text-2xl font-medium font-montserrat">
              {settingsText}
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img src="img_thumbs_up.svg" width={32} height={32} alt="Thumbs up" className="h-8" />
            <Heading as="p" className="text-2xl font-medium font-montserrat">
              {thumbsUpText}
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img src="img_favorite.svg" width={32} height={32} alt="Favorite" className="h-8" />
            <Heading as="p" className="text-2xl font-medium font-montserrat">
              {favoriteText}
            </Heading>
          </div>
          <Img src="img_settings_cyan_400.svg" width={32} height={32} alt="Settings" className="h-8" />
          <Img src="img_streamline_bag_dollar_solid_40x40.png" width={40} height={40} alt="Bag" className="h-10" />
        </div>
      </div>
    </div>
  )
}

