import Link from "next/link";
import React from "react";
import Feedback from "./Feedback";

const MobileAppScreenshotURL =
  "https://ucarecdn.com/1c53f2b7-4a42-4e6a-b4c0-ad298bbba937/-/scale_crop/838x1264/-/format/auto/-/quality/best/";

const Info = () => {
  return (
    <div>
      <div
        className="container mx-auto md:p-16 flex flex-col md:flex-row items-center justify-between h-max m-3.5"
      >
        <section className="md:w-1/2 md:mr-8 flex flex-col items-center justify-center mb-8 md:mb-0 xs:mt-20 sm:mt-16 lg:mt-8 relative">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Project Update: v2 Archived
          </h1>
          <p className="text-lg md:text-xl mb-4 text-center">
            The web version (v2) of the project is no longer actively
            maintained. Development has shifted to the mobile version (v3-Alpha)
            & (v4) iOS and Android devices.
          </p>
          <p className="text-lg md:text-xl mb-8 text-center">
            Check out the{" "}
            <Link
              href="https://github.com/ru-dr/v3-Alpha"
              className="text-blue-500 hover:text-blue-700"
            >
              v3 Alpha
            </Link>{" "}
            and{" "}
            <Link
              href="https://github.com/ru-dr/v4"
              className="text-blue-500 hover:text-blue-700"
            >
              v4 Beta
            </Link>{" "}
            development on GitHub for mobile devices.
          </p>
        </section>
        <section className="md:w-1/2 flex items-center justify-center">
          <img
            src={MobileAppScreenshotURL}
            alt="Mobile App Screenshot"
            className="mb-8 h-auto w-96 sm:w-64 lg:w-80 xl:w-96"
          />
        </section>
      </div>
      <Feedback />
    </div>
  );
};

export default Info;
