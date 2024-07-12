"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { bp_large } from "../../constants/breakpoints";

let index = 0;

export default function Home() {
  const slidesImages = [
    "/background/slides/Slide 1.png",
    "/background/slides/Slide 2.png",
    "/background/slides/Slide 3.png",
  ];
  const singleImages = [
    "/background/singles/image0000011.png",
    "/background/singles/image0000021.png",
    "/background/singles/image0000031.png",
    "/background/singles/image0000041.png",
    "/background/singles/image0000051.png",
    "/background/singles/image0000061.png",
    "/background/singles/image0000071.png",
    "/background/singles/image0000081.png",
    "/background/singles/image0000091.png",
    "/background/singles/image0000101.png",
  ];

  const [currentSlideImage, setCurrentSlideImage] = useState(slidesImages[0]);

  // Changes the background image of hero section every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      index < slidesImages.length - 1 ? (index += 1) : (index = 0);
      setCurrentSlideImage(slidesImages[index]);
    }, 4000);

    return () => clearInterval(interval);
  });

  // Changes the hero's section background image based on arrow selected
  function handleArrowClick(e) {
    if (e.target.alt == "left arrow") {
      index > 0 ? (index -= 1) : (index = slidesImages.length - 1);
      setCurrentSlideImage(slidesImages[index]);
    } else {
      index < slidesImages.length - 1 ? (index += 1) : (index = 0);
      setCurrentSlideImage(slidesImages[index]);
    }
  }

  return (
    <main>
      {/* Hero section */}
      <HeroSection
        currentSlideImage={currentSlideImage}
        handleArrowClick={handleArrowClick}
      />

      {/* About section */}
      <AboutSection />

      {/* Why choose us section */}
      <WhyChooseUsSection />

      {/* Product section */}
      <ProductSection />

      {/* Contact us section */}
      <ContactUsSection />
    </main>
  );
}

// ----------------------- LOCAL COMPONENTS -----------------------

function HeroSection({ currentSlideImage, handleArrowClick }) {
  const screenWidth = useRef(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      screenWidth.current = window.innerWidth;

      if (screenWidth.current < bp_large) {
      }
    });
  });

  return (
    <section>
      {/* Background images */}
      <div className="relative" id="hero">
        <div className="h-full w-full lg:flex">
          {
            <div className="w-full">
              <Image
                className="w-full h-full object-cover"
                width={2000}
                height={2000}
                src={currentSlideImage}
                alt="blinds"
              />
            </div>
          }
        </div>
      </div>

      {/* Buttons to go next and previous */}
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
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-14 pt-28">
      <div className="container mx-auto flex space-x-20 items-center">
        <Image
          className="rounded"
          src="/background/image0000041.png"
          width={600}
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
            Inside-out window coverings is owned Independently. We cater to all
            type of window treatment indoor or outdoor. We are committed to
            deliver the best shading and great customer service and affordable
            prices for all kind of consumer, residential or commercial.
          </p>

          <p>
            With this ever changing market, we are dedicated bring our best to
            provide our client an excellent customer service and fair market
            price on all our products.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="py-14">
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
              src="/background/image0000011.png"
              width={700}
              height={600}
              alt="window blinds"
            />
          </div>

          <div className="h-80 p-2 bg-white rounded shadow-lg">
            <Image
              className="rounded object-cover h-full"
              src="/background/image0000021.png"
              width={700}
              height={600}
              alt="window blinds"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="py-14">
      <div className="flex">
        {/* Blinds */}
        <div className="w-full relative bg-slate-600">
          <Image
            className="object-cover w-full h-full"
            src="/background/image0000071 (1).png"
            width={2000}
            height={2000}
            alt="window blinds"
          />

          <div className="absolute bottom-0 py-5 px-5 text-white bg-gray-950/80 h-1/4">
            <h6 className="font-semibold text-3xl mb-2">Blinds</h6>
            <p className="text-gray-300">
              Window blinds offer a combination of practical benefits, aesthetic
              appeal, and functional versatility, making them a popular choice
              for enhancing privacy, controlling light, and improving energy
              efficiency in residential and commercial spaces.
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
    </section>
  );
}

function ContactUsSection() {
  return (
    <section className="py-14">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-semibold mb-2">Contact us</h2>
        <p className="text-xl mb-16">
          Get in touch with us to learn more about InsideOut
        </p>

        <ContactForm />
      </div>
    </section>
  );
}

// ----------------------- LOCAL COMPONENTS END -----------------------
