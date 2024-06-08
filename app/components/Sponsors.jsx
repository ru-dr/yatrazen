import React from "react";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="flex flex-row w-full h-12 bg-[#52b2cf] text-black justify-center items-center text-base font-light space-x-4">
      <div>
        <div className="avail-ping"></div>
      </div>
      <p className="release">
        Thanks to our sponsor{" "}
        <Link href="https://www.newscatcherapi.com/" className="font-bold">
          NewsCatcher
        </Link>{" "}
        for real-time news.
      </p>
    </div>
  );
};

export default Sponsors;
