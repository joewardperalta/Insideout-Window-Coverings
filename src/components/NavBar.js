"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavBar({ handlerCategoryFunction }) {
  const pathname = usePathname();

  useEffect(() => {
    const productCategoryNavItem = document.querySelector(
      "#productCategoryNavItem"
    );
    const productNavItem = document.querySelector("#productNavItem");

    if (pathname == "/products") {
      // Show the product category nav item
      productCategoryNavItem.classList.remove("hidden");

      // Do not show the product nav item
      productNavItem.classList.add("hidden");
    } else {
      // Show the product nav item
      productNavItem.classList.remove("hidden");

      // Do not show the product category nav item
      productCategoryNavItem.classList.add("hidden");
    }
  });

  function closeNavbar() {
    const navbarNavWrapper = document.querySelector("#navbar-nav-wrapper");
    navbarNavWrapper.classList.toggle("right-full");
    navbarNavWrapper.classList.toggle("right-0");
  }

  function handleProductsClick() {
    const navProductsCategoryWrapper = document.querySelector(
      "#nav-products-category-wrapper"
    );
    navProductsCategoryWrapper.classList.toggle("animate-verticalWipeForward");
    navProductsCategoryWrapper.classList.toggle("animate-verticalWipeBackward");
  }

  function handleProductCategoryClick() {
    const navbarNavWrapper = document.querySelector("#navbar-nav-wrapper");
    navbarNavWrapper.classList.toggle("right-0");
    navbarNavWrapper.classList.toggle("right-full");
  }

  return (
    <>
      <div className="fixed w-full z-10">
        <AnnouncementBar />
        <div className="bg-white relative lg:sticky lg:top-0 shadow-lg shadow-gray-950/20">
          <div className="container mx-auto py-7">
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <div className="flex justify-between items-center w-full">
                <NavbarBrand>InsideOut.</NavbarBrand>
                <HamburgerButton closeNavbar={closeNavbar} />
              </div>
              <div
                className="absolute lg:static top-full right-full w-full lg:w-fit h-screen lg:h-fit bg-white transition-all"
                id="navbar-nav-wrapper"
              >
                <div className="container mx-auto lg:mx-0 lg:w-fit">
                  <NavbarNav
                    handleProductsClick={handleProductsClick}
                    handleProductCategoryClick={handleProductCategoryClick}
                    closeNavbar={closeNavbar}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Render the CategoriesBar component when current page is products */}
          {pathname == "/products" && <CategoriesBar />}
        </div>
      </div>
    </>
  );
}

function NavbarBrand({ children }) {
  return <h1 className="text-4xl font-extrabold text-gray-950">{children}</h1>;
}

function HamburgerButton({ closeNavbar }) {
  return (
    <button
      className="flex flex-col space-y-2 lg:hidden"
      onClick={() => closeNavbar()}
    >
      <div className="w-7 h-0.5 bg-black"></div>
      <div className="w-7 h-0.5 bg-black"></div>
      <div className="w-7 h-0.5 bg-black"></div>
    </button>
  );
}

function NavbarNav({
  handleProductsClick,
  handleProductCategoryClick,
  closeNavbar,
}) {
  const productCategories = [
    "Blinds",
    "Shades",
    "Awning",
    "Drapery",
    "Skylight",
    "Motorization",
  ];

  return (
    <nav className="w-full lg:w-fit py-10 lg:py-0 bg-white">
      <ul className="flex flex-col lg:flex-row gap-9">
        <li className="font-medium text-xl lg:text-base">
          <Link onClick={() => closeNavbar()} href="/">
            Home
          </Link>
        </li>

        <li className="font-medium text-xl lg:text-base" id="productNavItem">
          <Link onClick={() => closeNavbar()} href="/products">
            Products
          </Link>
        </li>

        <li
          className="font-medium text-xl lg:text-base lg:hidden hidden"
          id="productCategoryNavItem"
        >
          <button
            onClick={() => handleProductsClick()}
            className="flex items-center gap-2"
          >
            <span>Products</span>
            <Image
              src="/icons/211687_down_arrow_icon.svg"
              width={22}
              height={22}
              alt="arrow down icon"
            ></Image>
          </button>
          <ul
            className="space-y-4 ml-10 overflow-hidden animate-verticalWipeBackward"
            id="nav-products-category-wrapper"
          >
            {productCategories.map((name) => (
              <li key={name} className="active mt-5" id={name.toLowerCase()}>
                <button
                  className="btnCategory"
                  onClick={() => handleProductCategoryClick()}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </li>

        <li className="font-medium text-xl lg:text-base">
          <Link onClick={() => closeNavbar()} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex items-center justify-end py-2">
        <Image
          className="mr-2"
          src="/icons/352510_local_phone_icon.svg"
          width={20}
          height={20}
          alt="phone icon"
        ></Image>
        <a className="text-white" href="tel:(289) 980-0725">
          (289) 980-0725
        </a>
      </div>
    </div>
  );
}

function CategoriesBar() {
  const productCategories = [
    "Blinds",
    "Shades",
    "Awning",
    "Drapery",
    "Skylight",
    "Motorization",
  ];

  return (
    <div className="bg-gray-100 font-medium w-full absolute lg:static hidden lg:block">
      <ul className="container mx-auto flex" id="categories">
        {productCategories.map((name, i) => (
          <li className={i == 0 && "active"} id={name.toLowerCase()} key={name}>
            <button className="btnCategory">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
