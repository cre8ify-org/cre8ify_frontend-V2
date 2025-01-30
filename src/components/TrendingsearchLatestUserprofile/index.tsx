import React from "react"
import { Img } from "../Img"
import { Text } from "../Text"
import { Heading } from "../Heading"

interface Props {
  className?: string
}

export default function TrendingsearchLatestUserprofile({ ...props }: Props) {
  return (
    <div {...props} className={`flex flex-col gap-6 ${props.className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Img src="img_image_26.png" width={56} height={56} alt="User" className="rounded-full object-cover" />
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap gap-2">
              <Heading as="h5" className="text-xl font-bold sm:text-lg">
                Cameron Earnville
              </Heading>
              <Text as="p" className="text-xl font-normal sm:text-lg">
                -5hrs ago
              </Text>
            </div>
            <Text as="p" className="text-sm font-normal">
              @EarnvilleCameron
            </Text>
          </div>
        </div>
        <Img src="img_notification.svg" width={24} height={24} alt="Notification" className="h-6" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <Text as="p" className="text-2xl font-normal leading-8 text-white sm:text-xl">
            Diving deep into EtherWorld and just unlocked a legendary artifact! 🔮 The play-to-earn mechanics are
            insanely rewarding. If you haven&#39;t checked it out yet, now&#39;s the time! Let&#39;s build, play, and
            earn decentralized riches together. 🚀🌌 #PlayToEarn #NFTGaming #Ethereum #Blockchain
          </Text>
          <Img src="img_image_560x916.png" width={916} height={560} alt="Post" className="rounded-2xl object-cover" />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Img src="img_settings.svg" width={32} height={32} alt="Settings" className="h-8" />
            <Heading as="p" className="text-2xl font-medium font-montserrat sm:text-xl">
              56
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img src="img_thumbs_up.svg" width={32} height={32} alt="Thumbs up" className="h-8" />
            <Heading as="p" className="text-2xl font-medium font-montserrat sm:text-xl">
              72
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img src="img_favorite.svg" width={32} height={32} alt="Favorite" className="h-8" />
            <Heading as="p" className="text-2xl font-medium font-montserrat sm:text-xl">
              120
            </Heading>
          </div>
          <Img src="img_settings_cyan_400.svg" width={32} height={32} alt="Settings" className="h-8" />
          <Img src="img_streamline_bag_dollar_solid.png" width={40} height={40} alt="Bag" className="h-10" />
        </div>
      </div>
    </div>
  )
}

