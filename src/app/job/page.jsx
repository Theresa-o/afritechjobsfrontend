import React from "react";

const Job = () => {
  return (
    <main className=" bg-slate-200 pb-20">
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
            <div className="company-card">
              <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4">
                  <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                    <a
                      href=""
                      class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                    >
                      <div class="relative pb-48 overflow-hidden">
                        <img
                          class="absolute inset-0 h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                          alt=""
                        />
                      </div>
                      <div class="p-4">
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>
                        <h2 class="mt-2 mb-2  font-bold">
                          Purus Ullamcorper Inceptos Nibh
                        </h2>
                        <p class="text-sm">
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec ullamcorper nulla non metus auctor
                          fringilla.
                        </p>
                        <div class="mt-3 flex items-center">
                          <span class="text-sm font-semibold">Location:</span>
                          &nbsp;
                          <span class="font-bold text-xl">Lagos</span>
                        </div>
                      </div>
                      <div class="p-4 border-t border-b text-xs text-gray-700">
                        <span class="flex items-center">
                          <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                          Apply for this position
                        </span>
                      </div>
                      <div class="p-4 flex items-center text-sm text-gray-600">
                        <span class="ml-2">View all jobs</span>
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
