import React from "react";
import Image from "next/image";

const MainJobListings = () => {
  return (
    <section>
      <div>
        <div>
          {/* <div>search </div> */}
          <div className="job-listings-container">
            {/* -------------new desktop view */}
            <div className="job-listing gradient mx-auto flex w-5/6 px-5 items-center justify-center m-5">
              <div className="listing h-30 w-full rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 p-1">
                <div className="listing-content h-full w-full bg-white ">
                  <div className="grid grid-cols-12 gap-4 p-4 flex justify-center items-center">
                    {/* <!-- Column 1: Small Image --> */}
                    <div className="col-span-2">
                      <div className="bg-gray-200 rounded-full h-15 w-20 mx-2">
                        <img
                          src="/afritechlogo.png"
                          alt="Afritech Logo"
                          className="rounded-full"
                        />
                        {/* <Image
                          src="/afritechlogo.png"
                          alt="Afritech Logo"
                          className="dark:invert object-fill"
                          width={48}
                          height={48}
                        /> */}
                      </div>
                    </div>

                    {/* <!-- Column 2: Job Description --> */}
                    <div className="col-span-7">
                      <h2 className="text-xl font-semibold mb-2">Job Title</h2>
                      <p className="text-gray-600">Company Name</p>
                      <p className="text-gray-600">Keywords</p>
                      {/* <div className="flex flex-col mt-4">
                        <div className="flex">
                          <div className="pr-2">
                            <p className="text-sm text-gray-600">
                              Salary: $75,000 - $90,000
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* <!-- Column 3: Small, Slightly Bigger than Image Column --> */}
                    <div className="col-span-3">
                      <div className="whitespace-nowrap h-30 w-24">
                        <p className="text-gray-600">Location</p>
                        <p className="text-gray-600">Job Contract</p>
                        <p className="text-sm text-gray-600">Posted: 10 Sept</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="job-listing gray mx-auto px-5 items-center justify-center m-4 md:w-5/6 ">
              {/* job-listing gradient mx-auto flex w-5/6 px-5 items-center justify-center m-5 */}
              {/*   */}
              <div className="listing h-30 w-full rounded-md ">
                <div className="border-2 border-gray-500 p-2 h-full w-full flex items-center">
                  <a href="#" className="w-full flex items-center">
                    <div className="job-logo bg-gray-200 rounded-full h-20 w-20 hidden md:flex flex-shrink-0 md:m-5">
                      <img
                        src="/afritechlogo.png"
                        alt="Afritech Logo"
                        className="rounded-full h-18"
                      />
                    </div>
                    <div className="job-position-details ml-4 flex-grow m-4 md:m-9">
                      <div className="job-meta flex justify-between align-center w-full">
                        <h2 className="text-xl font-semibold mb-2">
                          Job Title
                        </h2>
                        <p className="text-gray-600 flex">Location</p>
                      </div>
                      <div className="job-meta flex justify-between align-center w-full">
                        <p className="text-gray-600">Company Name</p>
                        <p className="text-gray-600">Job Contract</p>
                      </div>

                      <div className="job-meta flex justify-between align-center whitespace-nowrap w-full">
                        <p className="text-gray-600">Keywords</p>
                        <span className="text-sm text-gray-600">
                          Posted: 10 Sept
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* =================================== */}

            {/* -------------new desktop view */}
            <div className="job-listing gradient mx-auto flex w-5/6 px-5 items-center justify-center m-5">
              <div className="listing h-30 w-full rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 p-1">
                <div className="listing-content h-full w-full bg-white ">
                  <div className="grid grid-cols-12 gap-4 p-4 flex justify-center items-center">
                    {/* <!-- Column 1: Small Image --> */}
                    <div className="col-span-2">
                      <div className="bg-gray-200 rounded-full h-15 w-20 mx-2">
                        <img
                          src="/afritechlogo.png"
                          alt="Afritech Logo"
                          className="rounded-full"
                        />
                        {/* <Image
                          src="/afritechlogo.png"
                          alt="Afritech Logo"
                          className="dark:invert object-fill"
                          width={48}
                          height={48}
                        /> */}
                      </div>
                    </div>

                    {/* <!-- Column 2: Job Description --> */}
                    <div className="col-span-7">
                      <h2 className="text-xl font-semibold mb-2">Job Title</h2>
                      <p className="text-gray-600">Company Name</p>
                      <p className="text-gray-600">Keywords</p>
                      {/* <div className="flex flex-col mt-4">
                        <div className="flex">
                          <div className="pr-2">
                            <p className="text-sm text-gray-600">
                              Salary: $75,000 - $90,000
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* <!-- Column 3: Small, Slightly Bigger than Image Column --> */}
                    <div className="col-span-3">
                      <div className="whitespace-nowrap h-30 w-24">
                        <p className="text-gray-600">Location</p>
                        <p className="text-gray-600">Job Contract</p>
                        <p className="text-sm text-gray-600">Posted: 10 Sept</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="job-listing gray mx-auto px-5 items-center justify-center m-4 md:w-5/6 ">
              {/* job-listing gradient mx-auto flex w-5/6 px-5 items-center justify-center m-5 */}
              {/*   */}
              <div className="listing h-30 w-full rounded-md ">
                <div className="border-2 border-gray-500 p-2 h-full w-full flex items-center">
                  <a href="#" className="w-full flex items-center">
                    <div className="job-logo bg-gray-200 rounded-full h-20 w-20 hidden md:flex flex-shrink-0 md:m-5">
                      <img
                        src="/afritechlogo.png"
                        alt="Afritech Logo"
                        className="rounded-full h-18"
                      />
                    </div>
                    <div className="job-position-details ml-4 flex-grow m-4 md:m-9">
                      <div className="job-meta flex justify-between align-center w-full">
                        <h2 className="text-xl font-semibold mb-2">
                          Job Title
                        </h2>
                        <p className="text-gray-600 flex">Location</p>
                      </div>
                      <div className="job-meta flex justify-between align-center w-full">
                        <p className="text-gray-600">Company Name</p>
                        <p className="text-gray-600">Job Contract</p>
                      </div>

                      <div className="job-meta flex justify-between align-center whitespace-nowrap w-full">
                        <p className="text-gray-600">Keywords</p>
                        <span className="text-sm text-gray-600">
                          Posted: 10 Sept
                        </span>
                      </div>
                    </div>
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
