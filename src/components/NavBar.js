import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
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
      </div>
    </>
  );
}
