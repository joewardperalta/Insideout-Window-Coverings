import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
