import React, { Suspense } from "react";
import { Heading } from "./Heading";
import UserProfile from "./UserProfile";
import DeFiInfoSection from "./DefiInfoSection";
import Home1Columnuserhandl from "../app/home1/Home1Columnuserhandle";

const trendingClips = [
  {
    videoImageSrc: "/img_image_4.png",
    profileImageSrc: "/img_image_5.png",
    profileName: "Andy James",
  },
  {
    videoImageSrc: "/img_image_284x188.png",
    profileImageSrc: "/img_image_5.png",
    profileName: "Andy James",
  },
  {
    videoImageSrc: "/img_image_7.png",
    profileImageSrc: "/img_image_8.png",
    profileName: "Daniels Kings",
  },
  {
    videoImageSrc: "/img_image_9.png",
    profileImageSrc: "/img_image_7_32x32.png",
    profileName: "Kilid Mbappe",
  },
];

const trendingTopics = [
  {
    decentralizedFinanceText: "Decentralized Finance (DeFI)",
    yieldFarmingText: "#Yield Farming",
    postsCounterText: "573 Posts",
  },
  {
    decentralizedFinanceText: "Web3 Gaming",
    yieldFarmingText: "#Play-to-Earn Games",
    postsCounterText: "432 Posts",
  },
  {
    decentralizedFinanceText: "Decentralized Physical Infrastructure",
    yieldFarmingText: "#Edge Computing",
    postsCounterText: "287 Posts",
  },
  {
    decentralizedFinanceText: "NFTs and Digital Art",
    yieldFarmingText: "#AI Generated ART",
    postsCounterText: "320 Posts",
  },
  {
    decentralizedFinanceText: "Web3 Integration",
    yieldFarmingText: "#DAO Communities",
    postsCounterText: "300 Posts",
  },
];

export default function TrendingSection() {
  return (
    <div className="flex w-[40%] flex-col gap-12 md:w-full md:px-5">
      <TrendingClips />
      <TrendingTopics />
    </div>
  );
}

function TrendingClips() {
  return (
    <div className="flex flex-col items-start">
      <Heading as="h3" className="text-3xl font-bold sm:text-2xl">
        Trending Clips
      </Heading>
      <div className="flex w-full flex-col items-start gap-3.5 overflow-x-scroll border-b border-solid border-dark_gray bg-midnight_black">
        <div className="h-[2px] w-[532px] bg-dark_gray" />
        <div className="mb-[26px] ml-3 flex w-[860px] gap-9 md:ml-0 md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {trendingClips.map((clip, index) => (
              <UserProfile {...clip} key={`clip-${index}`} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function TrendingTopics() {
  return (
    <div className="flex flex-col items-start gap-[46px]">
      <Home1Columnuserhandl />
      <div className="flex flex-col items-start gap-3.5 self-stretch">
        <Heading as="h5" className="text-3xl font-bold sm:text-2xl">
          Trending topics
        </Heading>
        <div className="h-[2px] w-[82%] bg-dark_gray" />
      </div>
      <div className="mr-[170px] flex flex-col gap-6 self-stretch px-4 md:mr-0">
        <Suspense fallback={<div>Loading feed...</div>}>
          {trendingTopics.map((topic, index) => (
            <DeFiInfoSection {...topic} key={`topic-${index}`} />
          ))}
        </Suspense>
      </div>
      <div className="h-[2px] w-[82%] bg-dark_gray" />
    </div>
  );
}
