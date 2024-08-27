import React from "react";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <div id="services" className="pb-20   dark:bg-gray-800">
        <div className=" p-4  md:p-0 ">
          <div className="flex flex-wrap justify-around  py-10 ">
            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-solid fa-code"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">
                Web Design
              </h2>
              <p className="mb-4">
                Create attractive and user-friendly websites & WebApplications
                that look great, work well, and leave a strong impression on
                your visitors
              </p>
              <Link
                className="text-white text-sm hover:bg-gray-900 p-2 rounded-md "
                to="https://github.com/abhay3690"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-sharp fa-solid fa-crop-simple"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">
                Web(Forntend) Development
              </h2>
              <p className="mb-4">
                Build websites that work smoothly and look good, so your online
                presence shines and your audience is impressed.
              </p>
              <Link
                className="text-white text-sm hover:bg-gray-900 p-2 rounded-md "
                to="https://github.com/abhay3690/React_Xduce"
                target="_blank"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-sharp fa-solid fa-crop-simple"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">
                Backend Devlopment
              </h2>
              <p className="mb-4">
                Create powerful and efficient backend systems with Spring Boot,
                ensuring smooth performance and functionality. Enhance your
                online presence and impress your audience with reliable,
                high-quality backend development that supports seamless user
                experiences.
              </p>
              <Link
                className="text-white text-sm hover:bg-gray-900 p-2 rounded-md "
                to="https://github.com/abhay3690/Spring-Boot/tree/master/product"
                target="_blank"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-brands fa-app-store"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">
                Video Editing
              </h2>
              <p className="mb-4">
                Edit videos to make them look professional and captivating,
                leaving a strong impact on your audience.
              </p>
              <Link
                className="text-white text-sm hover:bg-gray-900 p-2 rounded-md "
                to="https://www.youtube.com/channel/UCRxufHuM4J28aaHw3lcuPjQ"
              >
                Watch A Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
