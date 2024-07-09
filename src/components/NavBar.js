"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavBar({ handlerCategoryFunction }) {
  const pathname = usePathname();

  return (
    <>
      {/* Contacts Navbar */}
      <div className="bg-black">
        <div className="container mx-auto flex items-center justify-end py-2">
          <div className="flex">
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
      </div>

      {/* Navbar */}
      <div className="sticky top-0 bg-white shadow-lg shadow-gray-950/20 w-full z-50">
        <nav className="container mx-auto flex items-center justify-between py-7">
          {/* Nav Brand */}
          <h1 className="text-4xl font-extrabold text-gray-950">InsideOut.</h1>

          {/* Nav Menu */}
          <ul className="flex space-x-10 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Render only when in products page */}
        {pathname == "/products" && (
          <div className="bg-gray-100 font-medium">
            <ul className="container mx-auto flex" id="categories">
              <li className="active" id="blinds">
                <button className="btnCategory">Blinds</button>
              </li>
              <li id="shades">
                <button className="btnCategory">Shades</button>
              </li>
              <li id="awning">
                <button className="btnCategory">Awning</button>
              </li>
              <li id="drapery">
                <button className="btnCategory">Drapery</button>
              </li>
              <li id="skylight">
                <button className="btnCategory">Skylight</button>
              </li>
              <li id="motorization">
                <button className="btnCategory">Motorization</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
