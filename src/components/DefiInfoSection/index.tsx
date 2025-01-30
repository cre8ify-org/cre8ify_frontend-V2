import type React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";

interface Props {
  className?: string;
  decentralizedFinanceText?: React.ReactNode;
  yieldFarmingText?: React.ReactNode;
  postsCounterText?: React.ReactNode;
}

export default function DeFiInfoSection({
  decentralizedFinanceText = "Decentralized Finance (DeFI)",
  yieldFarmingText = "#Yield Farming",
  postsCounterText = "573 Posts",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between pr-8 ${props.className}`}
    >
      <div className="flex flex-col items-start">
        <Text
          as="p"
          className="text-[18px] leading-[32px] font-normal text-white"
        >
          {decentralizedFinanceText}
        </Text>
        <Heading
          as="h4"
          className="text-[18px] leading-[32px] font-bold text-white"
        >
          {yieldFarmingText}
        </Heading>
        <Text
          as="p"
          className="text-[18px] leading-[32px] font-normal text-white"
        >
          {postsCounterText}
        </Text>
      </div>
      <Img
        src="img_notification_tech_silver_0.svg"
        width={32}
        height={32}
        alt="Notifications"
        className="h-8"
      />
    </div>
  );
}
