import React from "react";
import Link from "next/link";

const MobileAppScreenshotURL =
  "https://ucarecdn.com/1c53f2b7-4a42-4e6a-b4c0-ad298bbba937/-/scale_crop/838x1264/-/format/auto/-/quality/best/";

export default function Home() {
  return (
    <div>
      <div className="z-50 sticky w-full" style={{ position: "fixed" }}>
        <div className="flex flex-row w-full h-12 bg-[#c0fd90] text-black justify-center items-center text-base font-light space-x-4">
          <div>
            <div className="avail-ping"></div>
          </div>
          <p className="release">
            Newer Version Available
            <span className="font-bold"> ( v3.0.4a ) </span>{" "}
            <span>
              <Link
                href="https://expo.dev/artifacts/eas/jVyCQZcf2x2xnnSESWiKMf.apk"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Download
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="container mx-auto p-8 md:p-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* release version message component */}
        {/* Left Section - Project Archived Message */}
        <section className="md:w-1/2 md:mr-8 flex flex-col items-center justify-center mb-8 md:mb-0 xs:mt-12 sm:mt-10 lg:mt-8">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Project Update: v2 Archived
          </h1>
          <p className="text-lg md:text-xl mb-4 text-center">
            The web version (v2) of the project is no longer actively
            maintained. Development has shifted to the mobile version (v3-Alpha) & (v4)
            iOS and Android devices.
          </p>
          <p className="text-lg md:text-xl mb-8 text-center">
            Check out the{" "}
            <a
              href="https://github.com/ru-dr/v3-alpha"
              className="text-blue-500 hover:text-blue-700"
            >
              v3-alpha
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/ru-dr/v4-beta"
              className="text-blue-500 hover:text-blue-700"
            >
              v4-beta
            </a>{" "}
            development on GitHub for mobile devices.
          </p>
        </section>
        {/* Right Section - Mobile App Screenshot */}
        <section className="md:w-1/2 flex items-center justify-center">
          {/* Displaying the mobile app screenshot from the provided URL */}
          <img
            src={MobileAppScreenshotURL}
            alt="Mobile App Screenshot"
            className="mb-8 h-auto w-96 sm:w-64 lg:w-80 xl:w-96"
          />
        </section>
      </div>
    </div>
  );
}
