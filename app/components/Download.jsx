import React from "react";
import Updates from "./Updates";

const Download = () => {
  return (
    <div className="z-50 sticky w-full">
      <div className="flex flex-row w-full h-12 bg-[#c0fd90] text-black justify-center items-center text-base font-light space-x-4">
        <div>
          <div className="avail-ping"></div>
        </div>
        <p className="release">
          Development halted due to{" "}
          <span className="font-bold">insufficient</span> funds.
        </p>
      </div>
      <Updates />
    </div>
  );
};

export default Download;
