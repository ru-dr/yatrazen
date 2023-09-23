"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { UserCircle } from "@phosphor-icons/react";

export default function Ynav() {
  const currentRoute = usePathname();

  const [showAsterisk, setShowAsterisk] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const activeLinkStyle = {
    color: "black",
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="flex flex-row justify-between items-center py-4">
      <Link
        href={"/"}
        className="inline-block z-50 text-3xl font-bold xxs:text-base xs:text-md sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl
      "
      >
        YatraZen.
      </Link>
      <ul className="hidden xl:flex flex-row w-2/5 justify-between items-center text-lg">
        <li>
          <Link href="/translate">
            <div
              style={currentRoute === "/translate" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/translate" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
                  *
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
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
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
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
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
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
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
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
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
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
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
            href="/sign-in"
            className="relative ease-linear transform hover:scale-105"
          >
            <div className="relative px-6 py-[15px]">
              <UserCircle size={32} className="absolute top-0" />
              <UserButton />
            </div>
          </Link>
        </li>
        {/* mobile button goes here */}
        <div className="xl:hidden flex items-center px-4 relative">
          <button
            onClick={toggleMobileMenu}
            className="absolute z-50 ease-in ani"
          >
            {!showMobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </ul>
      <div
        className={`nav-menu h-screen overflow-hidden flex justify-center items-center ${
          showMobileMenu ? "w-screen" : "w-0"
        } bg- absolute top-0 right-0 z-10 backdrop-blur-xl transition-all duration-500 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-center text-2xl gap-y-10">
          <Link href="/translate">
            <div
              style={currentRoute === "/translate" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/translate" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 animate-bounce">
                  *
                </span>
              ) : (
                ""
              )}{" "}
              Translate
            </div>
          </Link>
          <Link href="/sos">
            <div
              style={currentRoute === "/sos" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/sos" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
                  *&nbsp;
                </span>
              ) : (
                ""
              )}{" "}
              SOS
            </div>
          </Link>
          <Link href="/explore">
            <div
              style={currentRoute === "/explore" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/explore" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
                  *&nbsp;
                </span>
              ) : (
                ""
              )}{" "}
              Explore
            </div>
          </Link>
          <Link href="/weather">
            <div
              style={currentRoute === "/weather" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/weather" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
                  *&nbsp;
                </span>
              ) : (
                ""
              )}{" "}
              Weather
            </div>
          </Link>
          <Link href="/news">
            <div
              style={currentRoute === "/news" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/news" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
                  *&nbsp;
                </span>
              ) : (
                ""
              )}{" "}
              News
            </div>
          </Link>
          <Link href="/booking">
            <div
              style={currentRoute === "/booking" ? activeLinkStyle : {}}
              className="flex items-center relative ease-linear transform"
            >
              {showAsterisk && currentRoute === "/booking" ? (
                <span className="text-[#aaf683] text-3xl font-space fixed -left-6 -bottom-1 animate-bounce">
                  *&nbsp;
                </span>
              ) : (
                ""
              )}{" "}
              Booking
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
