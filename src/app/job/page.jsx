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
        <div className="job-container bg-white border-2 rounded-lg ">
          <div className=" flex justify-around">
            <div className="link-container flex row">
              <div className="px-3 inline-flex text-center">
                <div>
                  <ion-icon name="copy-outline"></ion-icon>
                </div>
                <span>copy link</span>
              </div>
              <div className="px-3 flex">
                <div>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </div>
                <span>share</span>
              </div>
              <div className="px-3 flex">
                <div>
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <span>share</span>
              </div>
              <div className="px-3 flex">
                <div>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </div>
                <span>share</span>
              </div>
              <div className="px-3 flex">
                <div>
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <span>tweet</span>
              </div>
            </div>
            <div>CATEGORY</div>
          </div>
          {/* <div className="main-job-listing flex align-center content-center gap-20">
            <div className="company-card">card</div>
            <div className="job-details">deta</div>
          </div>
          <div className="main-job-listing flex flex-row">
            <div className="company-card basis-1/4">card</div>
            <div className="job-details basis-1/4">deta</div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Job;
