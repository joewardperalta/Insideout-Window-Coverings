"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { bp_large } from "../../constants/breakpoints";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

let index = 0;

export default function Home() {
  const slides = [
    "/background/singles/image0000011.png",
    "/background/singles/image0000021.png",
    "/background/singles/image0000101.png",
    "/background/singles/image0000031.png",
    "/background/singles/image0000041.png",
    "/background/singles/image0000081.png",
    "/background/singles/image0000061.png",
    "/background/singles/image0000071.png",
    "/background/singles/image0000091.png",
  ];

  return (
    <main>
      {/* Hero section */}
      <HeroSection slides={slides} />

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

function HeroSection({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="lg:h-110" id="hero">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="h-full"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        {slides.map((src) => (
          <Image
            className="h-full w-full object-cover"
            key={src}
            src={src}
            height={3000}
            width={3000}
            alt="product"
          />
        ))}
      </Carousel>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="container mx-auto flex lg:space-x-20 xl:items-center">
        <div className="hidden lg:block w-full">
          <Image
            className="rounded h-full object-cover"
            src="/background/singles/image0000041-landscape.png"
            width={3000}
            height={3000}
            alt="window blinds"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-6xl uppercase font-semibold mb-5">
            <div className="text-2xl md:text-3xl uppercase font-semibold text-gray-600">
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
    <section className="pt-16 lg:pt-20">
      <div className="container mx-auto">
        <div className="lg:w-1/2 mb-10">
          <h2 className="text-2xl md:text-3xl uppercase font-semibold text-gray-600">
            Why
            <div className="text-4xl md:text-6xl uppercase font-semibold mb-5 text-black">
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

          <div className="h-80 p-2 bg-white rounded shadow-lg hidden md:block">
            <Image
              className="rounded object-cover h-full"
              src="/background/singles/image0000011.png"
              width={700}
              height={600}
              alt="window blinds"
            />
          </div>

          <div className="h-80 p-2 bg-white rounded shadow-lg hidden lg:block">
            <Image
              className="rounded object-cover h-full"
              src="/background/singles/image0000021.png"
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
            src="/background/singles/image0000071.png"
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
