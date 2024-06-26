"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

let index = 0;

export default function Home() {
  const heroCoverUrl = [
    "jason-leung-7XOYJHppytw-unsplash.jpg",
    "ducminh-nguyen-hG3H6N6VwCY-unsplash.jpg",
    "mike-cox-JXZ3bA_qLM4-unsplash.jpg",
    "ryan-yao-BDvCewlnbD8-unsplash.jpg",
    "darren-richardson-SnQHu8si5Yo-unsplash.jpg",
    "helena-lopes-Pd8tLVGx2O4-unsplash.jpg",
    "christopher-lemercier-tWPDKhDaE4k-unsplash.jpg",
  ];
  const [heroCover, setHeroCover] = useState(heroCoverUrl[0]);

  // Changes the background image of hero section every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      index < heroCoverUrl.length - 1 ? (index += 1) : (index = 0);
      setHeroCover(heroCoverUrl[index]);
    }, 4000);

    return () => clearInterval(interval);
  });

  // Changes the hero's section background image based on arrow selected
  function handleArrowClick(e) {
    if (e.target.alt == "left arrow") {
      index > 0 ? (index -= 1) : (index = heroCoverUrl.length - 1);
      setHeroCover(heroCoverUrl[index]);
    } else {
      index < heroCoverUrl.length - 1 ? (index += 1) : (index = 0);
      setHeroCover(heroCoverUrl[index]);
    }
  }

  return (
    <main>
      {/* Hero section */}
      <div className="h-1/3 bg-black absolute -z-10" id="hero">
        <Image
          className="object-fill h-full"
          src={"/" + heroCover}
          width={1920}
          height={1080}
          alt="blinds"
        />

        <div className="bg-gray-950/50 w-full relative bottom-12 py-2">
          <div className="container mx-auto flex justify-between">
            <button onClick={(e) => handleArrowClick(e)}>
              <Image
                src="/icons/211689_left_arrow_icon (1).svg"
                alt="left arrow"
                width={32}
                height={32}
              />
            </button>
            <button onClick={(e) => handleArrowClick(e)}>
              <Image
                src="/icons/211607_right_arrow_icon.svg"
                alt="right arrow"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
