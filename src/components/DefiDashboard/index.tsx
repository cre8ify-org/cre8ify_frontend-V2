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

export default function DeFiDashboard({
  decentralizedFinanceText = "Decentralized Finance (DeFI)",
  yieldFarmingText = "#Yield Farming",
  postsCounterText = "573 Posts",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`flex items-center justify-center px-4 ${props.className}`}
    >
      <div className="flex flex-col items-start gap-2">
        <Text as="p" className="text-2xl text-white">
          {decentralizedFinanceText}
        </Text>
        <Heading as="h4" className="text-2xl font-bold">
          {yieldFarmingText}
        </Heading>
        <Text as="p" className="text-2xl text-white">
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
