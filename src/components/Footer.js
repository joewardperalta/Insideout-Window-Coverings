import Image from "next/image";

export default function Footer({ className }) {
  return (
    <div className="bg-black py-5 mt-14 text-white">
      <div className="container mx-auto">
        <p className="uppercase text-center">
          &copy; 2024 InsideOut all rights reserved
        </p>
      </div>
    </div>
  );
}
