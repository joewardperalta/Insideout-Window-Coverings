"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

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
      <div id="hero">
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
            <h2 className="text-6xl uppercase font-semibold mb-5">
              <div className="text-3xl uppercase font-semibold text-gray-600">
                About
              </div>
              Inside out
            </h2>

            <p>
              Inside-out window coverings is owned Independently. We cater to
              all type of window treatment indoor or outdoor. We are committed
              to deliver the best shading and great customer service and
              affordable prices for all kind of consumer, residential or
              commercial.
            </p>

            <p>
              With this ever changing market, we are dedicated bring our best to
              provide our client an excellent customer service and fair market
              price on all our products.
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
              We offer a wide range of products and variety of fabric selection.
              We work hard on making sure that the project is completed on a
              timely manner. Consultation and check measure are free of charge.
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
          {/* Blinds */}
          <div className="w-full relative bg-slate-600">
            <Image
              className="object-cover w-full h-full"
              src="/darren-richardson-9epGsXo_VdI-unsplash.jpg"
              width={2000}
              height={2000}
              alt="window blinds"
            />

            <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80 h-1/4">
              <h6 className="font-semibold text-3xl mb-2">Blinds</h6>
              <p className="text-gray-300">
                Window blinds offer a combination of practical benefits,
                aesthetic appeal, and functional versatility, making them a
                popular choice for enhancing privacy, controlling light, and
                improving energy efficiency in residential and commercial
                spaces.
              </p>
            </div>
          </div>

          {/* Drapery */}
          <div className="w-full bg-slate-600 relative">
            <Image
              className="object-cover w-full h-full"
              src="/Window-Curtains-Master-Bed-Room.jpg"
              width={2000}
              height={2000}
              alt="window curtains"
            />

            <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80  h-1/4">
              <h6 className="font-semibold text-3xl mb-2">Drapery</h6>
              <p className="text-gray-300">
                Drapery provides a blend of style, functionality, and practical
                benefits, making them a popular choice for enhancing the comfort
                and aesthetics of any living or working space.
              </p>
            </div>
          </div>

          {/* Shades */}
          <div className="w-full bg-slate-600 relative">
            <Image
              className="object-cover w-full h-full"
              src="/White-Linen-Shades.jpg"
              width={2000}
              height={2000}
              alt="Window coverings"
            />

            <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80 h-1/4">
              <h6 className="font-semibold text-3xl mb-2">Shades</h6>
              <p className="text-gray-300">
                Window shades offer a blend of functionality, style, and energy
                efficiency, making them a practical and attractive choice for
                enhancing the comfort and ambiance of any space.
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

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
