import { CREATIFI_SVG } from "@/assets/svg";
import { TabsProps } from "@/lib/components/types";

export const NavBarLinks: TabsProps[] = [
  {
    name: "Home",
    icon: CREATIFI_SVG().homeIcon(),
    link: "/",
  },
  // {
  //   name: "Explore",
  //   icon: CREATIFI_SVG().exploreIcon(),
  //   link: "/explore",
  // },
  {
    name: "Notification",
    icon: CREATIFI_SVG().notificationIcon(),
    link: "/notification",
  },
  {
    name: "Wallet",
    icon: CREATIFI_SVG().walletIcon(),
    link: "/wallet",
  },
  {
    name: "Profile",
    icon: CREATIFI_SVG().profileIcon(),
    link: "/profile",
  },
  {
    name: "Settings",
    icon: CREATIFI_SVG().settingsIcon(),
    link: "/settings",
  },
];
