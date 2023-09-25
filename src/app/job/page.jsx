import React from "react";

const Job = () => {
  return (
    <main className=" bg-slate-200 pb-20 md:px-20">
      <div className="container md:container">
        <div className="inner-container flex justify-between mx-auto p-10">
          <div className="flex">
            <div className="text-xl md:text-3xl">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </div>
            <span className="text-sm md:text-base">Back to all jobs</span>
          </div>
          <div className="flex">
            <div className="text-xl md:text-3xl text-indigo-600">
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <span className="text-sm md:text-base text-stone-400">
              See all CATEGORY jobs
            </span>
          </div>
        </div>
        <div className="job-container bg-white py-10 border-2 rounded-lg ">
          <div className=" flex justify-around">
            <div className="link-container flex row gap-1">
              <div className="px-3 flex items-center rounded-md border-inherit border-2">
                <div className="flex items-center">
                  <div className="text-indigo-400">
                    <ion-icon name="copy-outline"></ion-icon>
                  </div>
                  <span className="ml-1">copy link</span>
                </div>
              </div>
              <div className="px-3 flex items-center rounded-md border-inherit border-2">
                <ion-icon name="logo-linkedin"></ion-icon>
                <span className="ml-1">share</span>
              </div>

              <div className="px-3 flex items-center rounded-md border-inherit border-2">
                <ion-icon name="logo-facebook"></ion-icon>
                <span className="ml-1">share</span>
              </div>

              <div className="px-3 flex items-center rounded-md border-inherit border-2">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <span className="ml-1">share</span>
              </div>

              <div className="px-3 flex items-center rounded-md border-inherit border-2">
                <ion-icon name="logo-twitter"></ion-icon>
                <span className="ml-1">tweet</span>
              </div>
            </div>
            <div>CATEGORY</div>
          </div>
          <br />
          <hr />

          <div className="main-job-listing flex align-center content-center gap-20">
            <div className="company-card mx-10">
              <div class="container mx-auto">
                <div class="flex flex-wrap mx-4">
                  <div class="w-full p-4">
                    <a
                      href=""
                      class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                    >
                      <div class="p-4">
                        <h2 class="mt-2 mb-2  font-bold">Company name</h2>
                        <a href="#">
                          <small>Company website</small>
                        </a>
                        <div class="mt-3 flex items-center">
                          <span class="text-sm font-semibold">Location:</span>
                        </div>
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Fully remote
                        </span>
                      </div>
                      <div class="p-4 border-t border-b text-xs text-gray-700">
                        <span class="flex items-center">
                          <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                          Apply for this position
                          {/* turn this to a button */}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-details">deta</div>
          </div>

          <div className="main-job-listing flex flex-row">
            <div className="company-card basis-1/4">card</div>
            <div className="job-details basis-1/4">deta</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Job;
