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
            <div className="link-container flex row md:gap-1">
              <div className="px-1 md:px-3 flex items-center rounded-md border-inherit border-2">
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
            <div className="hidden md:flex">CATEGORY</div>
          </div>
          <br />
          <hr />

          <div className="main-job-listing grid lg:grid-cols-12 gap-20">
            {/* <div className="company-card m-10 w-full">
              <div className="container mx-auto ">
                <div className="flex flex-wrap mx-4">
                  <div className="p-4">
                    <a
                      href=""
                      className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                    >
                      <div classNames="p-4">
                        <h2 className="mt-2 mb-2  font-bold">Company name</h2>
                        <a href="#">
                          <small>Company website</small>
                        </a>
                        <div className="mt-3 flex items-center">
                          <span className="text-sm font-semibold">
                            Location:
                          </span>
                        </div>
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Fully remote
                        </span>
                      </div>
                      <div className="p-4 border-t border-b text-xs text-gray-700">
                        <span className="flex items-center">
                          <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                          Apply for this position
                          {/* turn this to a button */}
            {/* </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg grid md:col-span-3">
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  company Name
                </h2>
                <p className="text-gray-600">website</p>
                <p className="text-gray-600">location</p>
                <p className="text-green-600">Fully Remote</p>
              </div>
              <div className="px-4 py-2 bg-gray-100">
                <button className="block w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full">
                  Apply for this position
                </button>
              </div>
            </div> */}

            <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg grid md:col-span-3">
              <div className="m-10 w-full">
                <div className="mb-5">
                  <div className="font-bold">Company</div>
                  <div className="flex items-center mt-2 space-x-2 text-gray-600">
                    <img
                      className="object-cover w-8 h-8 rounded-full ring-1 ring-inset ring-black"
                      src="/afritechlogo.png"
                      alt="Afritech Logo"
                    />
                    <p>SuperDuper inc.</p>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="font-bold">Location</div>
                  <div className="mt-2 text-gray-600">Fully remote</div>
                </div>
                <div className="flex content-center justify-center w-full mb-5">
                  <a href="#">
                    <button>Apply</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="job-details m-10 grid md:col-span-9">
              <div className="job-title font-bold text-2xl">
                <h1>
                  Senior ML/ Python Engineer (Open-Source; Core Founding Team)
                </h1>
              </div>
              <div className="job-description my-6">
                <div className="jd-intro">
                  SuperDuperDB, a solidly funded startup, is looking for an
                  experienced machine learning & Python engineer to join our
                  small team of absolute experts who are building an open-source
                  system to effortlessly integrate AI and databases.
                  <br />
                  <br />
                  SuperDuperDB (which we will launch in the next weeks) is an
                  open-source environment for developers to easily implement
                  next-generation AI models and applications on top of your
                  existing loved data source - from LLMs, and public APIs to
                  custom high-performance in-house machine learning models. It
                  transforms your favourite data store into a vector database,
                  feature store, model repository, performance monitor and
                  end-to-end live AI deployment all at once! SuperDuperDB has
                  the potential to disrupt how AI is developed and implemented -
                  and to become the new standard for doing AI with your data.
                  <br />
                  <br />
                  The position is the opportunity to build SuperDuperDB and its
                  community from the ground up. A past record of work around
                  open-source Python projects in AI/ ML/ Data would be very
                  attractive to us. You can be fully remote, or work at our
                  Berlin office. Salary is competitive incl. stock options and
                  the existing small team is first-class.
                </div>
                <div className="jd-requirements my-6">
                  <div className="jd-req-intro">
                    <h2>Requirements</h2>
                    <ul>
                      <li>
                        Good understanding of developer and open-source
                        communities
                      </li>
                      <li>
                        Knowledge of and experience with popular databases,
                        including SQL-based RDBMS, MongoDB and others
                      </li>
                      <li>
                        Knowledge of the scientific Python ecosystem including
                        Pandas, PyTorch, Scikit-Learn, Numpy, Tensorflow etc.
                      </li>
                      <li>
                        Proficiency in Python and other relevant languages.
                      </li>
                      <li>
                        In-depth experience building and applying AI, machine
                        learning, data science, and MLOps.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="jd-benefits my-6">
                  <div className="jd-benefits-intro">
                    <h2>Benefits</h2>
                    <ul>
                      <li>
                        High-impact work with other highly-talented and skilled
                        team members
                      </li>
                      <li>Competitive salary and stock options</li>
                      <li>The choice between fully remote work and hybrid</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button className="font-bold text-2xl">Apply for this job</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Job;
