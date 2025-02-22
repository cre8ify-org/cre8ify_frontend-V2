"use client";

import React, { Suspense, useState } from "react";
import { Heading, Button, Text } from "../../components";
import DeFiInfoSection from "../../components/DefiInfoSection";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";
import UserProfile from "../../components/UserProfile";
import UserProfilePost from "../../components/UserProfilePost";
import Home1Columnuserhandl from "./Home1Columnuserhandle";
import Link from "next/link";
import { CREATIFI_SVG } from "@/assets/svg";
import Image from "next/image";
import { PostModal } from "@/components/PostModal";

const trendingTopics = [
  {
    title: "Decentralized Finance (DeFI)",
    hashtag: "#Yield Farming",
    posts: "573 Posts",
  },
  { title: "Web3 Gaming", hashtag: "#Play-to-Earn Games", posts: "432 Posts" },
  {
    title: "Decentralized Physical Infrastructure",
    hashtag: "#Edge Computing",
    posts: "287 Posts",
  },
  {
    title: "NFTs and Digital Art",
    hashtag: "#AI Generated ART",
    posts: "320 Posts",
  },
  {
    title: "Web3 Integration",
    hashtag: "#DAO Communities",
    posts: "300 Posts",
  },
];

const trendingClips = [
  {
    videoSrc: "/images/image-1.png",
    profileSrc: "/images/image-5.png",
    name: "Andy James",
  },
  {
    videoSrc: "/images/image-3.png",
    profileSrc: "/images/image-6.png",
    name: "Vicking Lee",
  },
  {
    videoSrc: "/images/image-3.png",
    profileSrc: "/images/image-8.png",
    name: "Daniels Kings",
  },
  {
    videoSrc: "/images/image-4.png",
    profileSrc: "/images/image-7.png",
    name: "Kilid Mbappe",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-midnight_black h-screen">
      <Header />
      <div className="flex gap-8">
        <Sidebar2 className="w-[104px] overflow-y-auto" />
        {/* <main className="flex gap-12 p-8"> */}
        <div className="w-3/5 h-[82vh] overflow-y-auto mt-6">
          <div className="flex justify-between items-center mb-6">
            <Heading
              as="h1"
              className="text-[28px] font-bold leading-[40px] font-montserrat"
            >
              Feeds
            </Heading>
            <nav className="flex gap-6">
              <Link href="#" className="text-xl text-tech_silver-1">
                Recents
              </Link>
              <Link href="#" className="text-xl font-bold text-grey_1">
                Following
              </Link>
              <Link href="#" className="text-xl text-tech_silver-1">
                Popular
              </Link>
            </nav>
          </div>
          <div
            className="border border-dark_gray rounded-2xl p-4 mb-12 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex items-center gap-6 border border-dark_gray rounded-full p-2 mb-4">
              <Image
                src="/images/Frame 30139.png"
                width={40}
                height={40}
                alt="User"
                className="rounded-full"
              />
              <Text className="text-lg text-tech_silver-1 font-normal">
                Whats on your mind?
              </Text>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-6">
                {[
                  CREATIFI_SVG().imageIcon(),
                  CREATIFI_SVG().recordIcon(),
                  CREATIFI_SVG().audioIcon(),
                ].map((icon, index) => (
                  <div key={index}>{icon}</div>
                ))}
              </div>
              <Button className="px-6 py-3 rounded-full bg-gradient text-midnight_black">
                Post
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <UserProfilePost />
            <hr className="border-t border-dark_gray" />
            <UserProfilePost />
          </div>
        </div>
        <aside className="w-2/5 h-[82vh] pl-4 overflow-y-auto mt-6">
          <section className="mb-12 w-full">
            <Heading
              as="h3"
              className="text-[28px] font-bold leading-[40px] mb-4"
            >
              Trending Clips
            </Heading>
            <div className="flex gap-8 overflow-x-auto pb-6 border-b border-dark_gray w-xs">
              <Suspense fallback={<div>Loading clips...</div>}>
                {trendingClips.map((clip, index) => (
                  <UserProfile
                    key={index}
                    videoImageSrc={clip.videoSrc}
                    profileImageSrc={clip.profileSrc}
                    profileName={clip.name}
                  />
                ))}
              </Suspense>
            </div>
          </section>
          <Home1Columnuserhandl />
          <section className="mt-12">
            <Heading
              as="h5"
              className="text-[28px] font-bold leading-[40px] mb-4"
            >
              Trending topics
            </Heading>
            <hr className="border-t border-dark_gray mb-6" />
            <div className="flex flex-col gap-6">
              <Suspense fallback={<div>Loading topics...</div>}>
                {trendingTopics.map((topic, index) => (
                  <DeFiInfoSection
                    key={index}
                    decentralizedFinanceText={topic.title}
                    yieldFarmingText={topic.hashtag}
                    postsCounterText={topic.posts}
                  />
                ))}
              </Suspense>
            </div>
            <hr className="border-t border-dark_gray mt-6" />
          </section>
        </aside>
        {/* </main> */}
      </div>
      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
