import { Img } from "../Img";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";

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
      className={`${props.className} flex justify-center items-center self-stretch px-4 flex-1`}
    >
      {" "}
      <div className="flex flex-1 flex-col items-start gap-2">
        {" "}
        <Text as="p" className="text-[24px] font-normal !text-white">
          {" "}
          {decentralizedFinanceText}{" "}
        </Text>{" "}
        <Heading size="headings" as="h4" className="text-[24px] font-bold">
          {" "}
          {yieldFarmingText}{" "}
        </Heading>{" "}
        <Text as="p" className="text-[24px] font-normal !text-white">
          {" "}
          {postsCounterText}{" "}
        </Text>{" "}
      </div>{" "}
      <Img
        src="img_notification_tech_silver_0.svg"
        width={32}
        height={32}
        alt="Notificationsim"
        className="h-[32px]"
      />{" "}
    </div>
  );
}
