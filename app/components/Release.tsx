import React from "react";
// import the link component from next to open the link to download the new version
import Link from "next/link";

const Release = () => {
  return (
    <div className="avail-status">
      <div>
        <div className="avail-ping"></div>
      </div>
      {/* <p>Newer Version Available ( v3.0.4a ) <span></span></p> */}
      <p>
        Newer Version Available ( v3.0.4a ){" "}
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
  );
};

export default Release;
