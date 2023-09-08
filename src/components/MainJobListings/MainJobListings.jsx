import React from "react";
import Image from "next/image";

const MainJobListings = () => {
  return (
    <section>
      <div>
        <div>
          <div>search </div>
          <div className="job-listings-container">
            <div className="job-listing gradient mx-auto flex max-w-screen-lg px-5 items-center justify-center">
              <div className="listing h-48 w-full rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 p-1">
                <div className="listing-content h-full w-full bg-white">
                  <a href="#">
                    <div className="job-logo"></div>
                    <div className="job-position-details"></div>
                    <div className="job-meta"></div>
                  </a>
                </div>
              </div>
            </div>
            {/* iijijijie */}
            <div className="job-listing gradient mx-auto flex w-5/6 px-5 items-center justify-center m-5">
              <div className="listing h-48 w-full rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 p-1">
                <div className="listing-content h-full w-full bg-white">
                  <a href="#">
                    <div className="job-logo max-width h-auto">
                      <Image
                        src="/afritechlogo.png"
                        alt="Afritech Logo"
                        className="dark:invert"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="job-position-details">hi</div>
                    <div className="job-meta">hi</div>
                  </a>
                </div>
              </div>
            </div>
            {/* iijijijie */}
            <div className="job-listing gradient mx-auto flex max-w-screen-xl px-5 items-center justify-center m-5">
              <div className="listing h-48 w-full rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 p-1">
                <div className="listing-content h-full w-full bg-white">
                  <a href="#">
                    <div className="job-logo"></div>
                    <div className="job-position-details"></div>
                    <div className="job-meta"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="job-listing gray mx-auto flex max-w-screen-lg px-5 items-center justify-center m-4">
              <div className="listing h-36 w-full rounded-md">
                <div className="border-2 border-gray-500 p-2 h-full w-full">
                  <a href="#">
                    <div className="job-logo"></div>
                    <div className="job-position-details"></div>
                    <div className="job-meta"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainJobListings;
