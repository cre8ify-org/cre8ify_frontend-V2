import React, { Suspense } from "react";
import { Heading } from "../../components/Heading";
import UserProfile1 from "../../components/UserProfile1";

const usersToFollow = [
  { image: "img_image_56x56.png", name: "Ching Lee", handle: "@Leechingwall1" },
  { image: "img_image_64x64.png", name: "Andy James", handle: "@jamwsandy100" },
  { image: "img_image_10.png", name: "Kilid Mbappe", handle: "@jmpappepsg1" },
  {
    image: "img_image_11.png",
    name: "Daniel Messang",
    handle: "@danielmessang01",
  },
];

export default function Home1Columnuserhandle() {
  return (
    <section>
      <Heading
        as="h4"
        className="text-[28px] font-bold leading-[40px] font-montserrat mb-4"
      >
        Who to follow
      </Heading>
      <hr className="border-t border-dark_gray mb-6" />
      <div className="flex flex-col gap-8 pr-8">
        <Suspense fallback={<div>Loading users...</div>}>
          {usersToFollow.map((user, index) => (
            <UserProfile1
              key={index}
              userImage={user.image}
              userName={user.name}
              userHandle={user.handle}
              follow="Follow"
            />
          ))}
        </Suspense>
      </div>
      <hr className="border-t border-dark_gray mt-6" />
    </section>
  );
}
