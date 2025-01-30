import type React from "react"
import { Text } from "../Text"
import { Img } from "../Img"

interface Props {
  className?: string
  userImage?: string
  userName?: React.ReactNode
  userStatus?: React.ReactNode
}

export default function UserProfile2({
  userImage = "img_image_12.png",
  userName = "RainbowKit",
  userStatus = "Detected",
  ...props
}: Props) {
  return (
    <div {...props} className={`flex items-center justify-between p-2 rounded-2xl ${props.className}`}>
      <div className="flex items-center gap-6">
        <Img src={userImage} width={64} height={64} alt="User avatar" className="rounded-2xl" />
        <Text as="p" className="text-2xl text-white">
          {userName}
        </Text>
      </div>
      <Text as="p" className="px-2 py-0.5 text-xl text-white bg-blue-900 rounded-lg">
        {userStatus}
      </Text>
    </div>
  )
}

