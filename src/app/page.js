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
      <div className="h-screen" id="hero">
        <Image
          className="object-cover h-full"
          src={"/" + heroCover}
          width={6000}
          height={6000}
          alt="blinds"
        />

        {/* Left and right arrow keys */}
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

      {/* About section */}
      <div className="py-14 pt-28">
        <div className="container mx-auto flex space-x-20 items-center">
          <Image
            className="rounded"
            src="/steinar-engeland-hmIFzdQ6U5k-unsplash.jpg"
            width={700}
            height={600}
            alt="window blinds"
          />

          <div>
            <h2 className="text-3xl uppercase font-semibold text-gray-600">
              About
            </h2>
            <h2 className="text-6xl uppercase font-semibold mb-5">
              Inside out
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us section */}
      <div className="py-14">
        <div className="container mx-auto">
          <div className="w-1/2 mb-10">
            <h2 className="text-3xl uppercase font-semibold text-gray-600">
              Why
              <div className="text-6xl uppercase font-semibold mb-5 text-black">
                Choose us?
              </div>
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="flex space-x-10">
            <div className="h-80 p-2 bg-white rounded shadow-lg">
              <Image
                className="rounded object-cover h-full"
                src="/large-windows-alustra-pirouette-window-shadings-hunter-douglas-traditional-living-room-one-stop-decorating.jpg"
                width={700}
                height={300}
                alt="window coverings"
              />
            </div>

            <div className="h-80 p-2 bg-white rounded shadow-lg">
              <Image
                className="rounded object-cover h-full"
                src="/btg_product_wood_laredo_pewter.jpg"
                width={700}
                height={600}
                alt="window blinds"
              />
            </div>

            <div className="h-80 p-2 bg-white rounded shadow-lg">
              <Image
                className="rounded object-cover h-full"
                src="/ba2cd3_2f644cfd1f0d4b819c2e995568e3c7ad~mv2.jpg"
                width={700}
                height={600}
                alt="window blinds"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product section */}
      <div className="py-14">
        <div className="flex">
          <div className="w-full relative bg-slate-600">
            <Image
              className="object-cover w-full h-full"
              src="/darren-richardson-9epGsXo_VdI-unsplash.jpg"
              width={2000}
              height={2000}
              alt="window blinds"
            />

            <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80">
              <h6 className="font-semibold text-3xl mb-2">Blinds</h6>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus pretium quam vulputate dignissim suspendisse in. Et
                sollicitudin ac orci phasellus egestas.
              </p>
            </div>
          </div>

          <div className="w-full bg-slate-600 relative">
            <Image
              className="object-cover w-full h-full"
              src="/Window-Curtains-Master-Bed-Room.jpg"
              width={2000}
              height={2000}
              alt="window curtains"
            />

            <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80">
              <h6 className="font-semibold text-3xl mb-2">Curtains</h6>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus pretium quam vulputate dignissim suspendisse in. Et
                sollicitudin ac orci phasellus egestas.
              </p>
            </div>
          </div>

          <div className="w-full bg-slate-600 relative">
            <Image
              className="object-cover w-full h-full"
              src="/White-Linen-Shades.jpg"
              width={2000}
              height={2000}
              alt="Window coverings"
            />

            <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80">
              <h6 className="font-semibold text-3xl mb-2">Coverings</h6>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus pretium quam vulputate dignissim suspendisse in. Et
                sollicitudin ac orci phasellus egestas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="py-14">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-5xl font-semibold mb-2">Contact us</h2>
          <p className="text-xl mb-16">
            Get in touch with us to learn more about InsideOut
          </p>

          <form className="w-1/2 space-y-5">
            <div className="flex space-x-5">
              {/* Firstname */}
              <input
                className="border-2 border-gray-500 py-2 px-4 rounded w-full"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
              />

              {/* Lastname */}
              <input
                className="border-2 border-gray-500 py-2 px-4 rounded w-full"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Last name"
              />
            </div>

            {/* Email */}
            <input
              className="border-2 border-gray-500 py-2 px-4 rounded w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />

            {/* Subject */}
            <input
              className="border-2 border-gray-500 py-2 px-4 rounded w-full"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />

            {/* Message */}
            <textarea
              className="border-2 border-gray-500 py-2 px-4 rounded w-full"
              id="message"
              name="message"
              placeholder="Enter your message here..."
              rows={10}
            ></textarea>

            <button
              className="bg-gray-950 rounded w-full p-3 text-center text-white"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
