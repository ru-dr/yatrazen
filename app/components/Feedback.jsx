import React from "react";
import Link from "next/link";

const Feedback = () => {
  return (
    <div className="flex flex-row w-full h-12 bg-[#9381ff] text-black justify-center items-center text-base font-light space-x-4">
      <div>
        <div className="avail-ping"></div>
      </div>
      {/* <p className="release">
        Share your feedback on{" "}
        <span className="font-bold "> ( v4.0.6a ) </span>{" "}
        <span>
          <Link
            href="/feedback"
            className="text-[#f8f7ff] font-semibold px-2"
          >
            Feedback
          </Link>
        </span>
      </p> */}
      <p className="release">
        Developed by:{" "}
        <span className="font-bold">
          <Link href="https://rudr.me/">rudr</Link>
        </span>{" "}
        & Team.exe
      </p>
    </div>
  );
};

export default Feedback;
