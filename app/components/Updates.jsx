import React from "react";
import Marquee from "react-fast-marquee";

const Updates = () => {
  return (
    <div className="flex flex-row w-full h-12 bg-[#ffc600] text-black justify-center items-center text-base font-light space-x-4">
      <Marquee gradient={false} speed={50}>
        <div>
          <div className="avail-ping mx-3"></div>
        </div>
        <p className="release">
          If you're interested in <span className="font-bold">reviving the project</span>, please reach out.
        </p>
      </Marquee>
    </div>
  );
};

export default Updates;
