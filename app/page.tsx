import React from "react";
import Yhero from "./components/Yhero";
import Ynav from "./components/Ynav";
import Yplaces from "./components/Yplaces";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* <Ynav />
      <section className="my-4">
        <Yhero />
      </section>
      <section>
        <Yplaces />
      </section> */}

      {/* Project archived message */}
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">
          v2 is No Longer in Development
        </h1>
        <p className="text-xl text-center mb-8">
          The web version (v2) of the project is no longer actively maintained.
          Development has shifted to the mobile version (v3) for iOS and Android
          devices. Head over to{" "}
          <a
            href="https://github.com/ru-dr/v3"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>{" "}
          to see and contribute to the development of v3 for mobile devices.
        </p>
      </section>
    </div>
  );
}
