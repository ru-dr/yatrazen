import React from "react";
import Download from "./components/Download";
import Info from "./components/Info";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Download />
      <div className="flex-grow">
        <Info />
      </div>
      <Sponsors />
    </div>
  );
}
