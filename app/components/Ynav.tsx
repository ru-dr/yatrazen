"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Ynav() {
  const currentRoute = usePathname();

  const [showAsterisk, setShowAsterisk] = useState(true);

  const activeLinkStyle = {
    color: "black",
  };

  return (
    <main className="w-screen">
      <nav className="flex flex-row justify-between items-center px-6 py-4">
        <p className="text-3xl font-bold">YatraZen.</p>
        <ul className="flex flex-row w-2/5 justify-between items-center text-lg">
          <li>
            <Link href="/translate">
              <div
                style={currentRoute === "/translate" ? activeLinkStyle : {}}
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/translate" ? (
                  <span className="text-[#b0f2b4] text-2xl font-space fixed -left-6 bottom-0 animate-bounce">
                    *&nbsp;
                  </span>
                ) : (
                  ""
                )}{" "}
                Translate
              </div>
            </Link>
          </li>
          <li>
            <Link href="/sos">
              <div
                style={currentRoute === "/sos" ? activeLinkStyle : {}}
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/sos" ? (
                  <span className="text-[#7bf1a8] text-2xl font-space fixed -left-6">
                    *&nbsp;
                  </span>
                ) : (
                  ""
                )}{" "}
                SOS
              </div>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <div
                style={currentRoute === "/explore" ? activeLinkStyle : {}}
                className="flex items-center"
              >
                {showAsterisk && currentRoute === "/explore" ? (
                  <span className="text-[#7bf1a8] text-2xl font-space">
                    *&nbsp;
                  </span>
                ) : (
                  ""
                )}{" "}
                Explore
              </div>
            </Link>
          </li>
          <li>
            <Link href="/weather">
              <div
                style={currentRoute === "/weather" ? activeLinkStyle : {}}
                className="flex items-center"
              >
                {showAsterisk && currentRoute === "/weather" ? (
                  <span className="text-[#7bf1a8] text-2xl font-space">
                    *&nbsp;
                  </span>
                ) : (
                  ""
                )}{" "}
                Weather
              </div>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <div
                style={currentRoute === "/news" ? activeLinkStyle : {}}
                className="flex items-center"
              >
                {showAsterisk && currentRoute === "/news" ? (
                  <span className="text-[#7bf1a8] text-2xl font-space">
                    *&nbsp;
                  </span>
                ) : (
                  ""
                )}{" "}
                News
              </div>
            </Link>
          </li>
          <li>
            <Link href="/booking">
              <div
                style={currentRoute === "/booking" ? activeLinkStyle : {}}
                className="flex items-center"
              >
                {showAsterisk && currentRoute === "/booking" ? (
                  <span className="text-[#7bf1a8] text-2xl font-space">
                    *&nbsp;
                  </span>
                ) : (
                  ""
                )}{" "}
                Booking
              </div>
            </Link>
          </li>
        </ul>
        <ul className="flex text-md items-center">
          <li>
            <Link
              href="/signin"
              className="px-6 py-2 bg-[#beffc5] rounded-full hover:bg-[#acff82] duration-500 transition-colors"
            >
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
