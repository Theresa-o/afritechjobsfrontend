import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3 my-10 mx-5 gap-x-5 md:grid-rows-1 md:gap-x-10 md:grid-cols-4">
        <div className="mx-10">
          <div className="h-auto w-20">
            <img src="/afritechlogo.png" alt="Afritech Logo" />
          </div>
          <p>The leading job board for African TechStars</p>
          <small>2023 AfriTechJobs. All rights reserved</small>
        </div>
        <div className="">
          <h6 className="font-bold leading-3 md:leading-5 md:text-xl">
            Post A Job
          </h6>
          <ul className="mt-3 text-sm md:text-base">
            <li className="mt-1">Pricing</li>
            <li className="mt-1">Remote work tools</li>
            <li className="mt-1">Hiring candidate</li>
            <li className="mt-1">Sign in Employer</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold leading-3 md:leading-5 md:text-xl">
            Find A Job
          </h6>
          <ul className="mt-3 text-sm md:text-base">
            <li className="mt-1 ">Job by level</li>
            <li className="mt-1">Job by duration</li>
            <li className="mt-1">Job by country</li>
            <li className="mt-1">Learning resources</li>
            <li className="mt-1">Sign in Candidate</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold leading-3 md:leading-5 md:text-xl">
            About Us
          </h6>
          <ul className="mt-3 text-sm md:text-base">
            <li className="mt-1">Blog</li>
            <li className="mt-1">Contact us</li>
            <li className="mt-1">FAQs</li>
            <li className="mt-1">Privacy & terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
