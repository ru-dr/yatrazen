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
      <nav className="flex flex-row justify-between items-center px-6 py-4">
        <Link href={"/"} className="text-3xl font-bold">YatraZen.</Link>
        <ul className="flex flex-row w-2/5 justify-between items-center text-lg">
          <li>
            <Link href="/translate">
              <div
                style={currentRoute === "/translate" ? activeLinkStyle : {}}
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/translate" ? (
                  <span className="text-[#aaf683] text-3xl font-space fixed -left-4 -bottom-3 animate-bounce">
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
                  <span className="text-[#aaf683] text-3xl font-space fixed -left-4 -bottom-3 animate-bounce">
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
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/explore" ? (
                  <span className="text-[#aaf683] text-3xl font-space fixed -left-4 -bottom-3 animate-bounce">
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
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/weather" ? (
                  <span className="text-[#aaf683] text-3xl font-space fixed -left-4 -bottom-3 animate-bounce">
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
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/news" ? (
                  <span className="text-[#aaf683] text-3xl font-space fixed -left-4 -bottom-3 animate-bounce">
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
                className="flex items-center relative ease-linear transform"
              >
                {showAsterisk && currentRoute === "/booking" ? (
                  <span className="text-[#aaf683] text-3xl font-space fixed -left-4 -bottom-3 animate-bounce">
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
  );
}
