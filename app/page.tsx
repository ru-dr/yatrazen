import React from "react";
import Download from "./components/Download";
import Info from "./components/Info";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Download />
      <Info />
    </div>
  );
}
