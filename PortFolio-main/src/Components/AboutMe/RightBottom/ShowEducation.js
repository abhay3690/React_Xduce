import React from "react";

function ShowEducation() {
  return (
    <div
      className="sm:p-8 flex px-5 md:pl-5 lg:pl-20 sm:pl-20"
      id="showEducation"
    >
      <ul>
        <li className="my-2  text-gray-500 dark:text-gray-400">
          <strong className="text-black dark:text-white">
            {" "}
            <span>College Name : </span>
            LDRP Institute of Technology and Research{" "}
          </strong>
          <br />
          <span>Degree : </span>Computer Engineer
          <br />
          <span>Graduation Year:</span>2024
          <br />
          <span>CGPA :</span>
          <strong> 8.46</strong>
          <br />
        </li>
        <li className="my-2  text-gray-500 dark:text-gray-400">
          <strong className="text-black dark:text-white">
            <span>School :</span> Arpan Education & Higher Secondory School
          </strong>{" "}
          <br />
          <span>HSC: </span>Science
          <br />
          <span>Passing Year:</span> 2020
          <br />
          <span>Percentage :</span> 71.33%
          <br />
        </li>
        <li className="my-2  text-gray-500 dark:text-gray-400 ">
          <strong className="text-black dark:text-white">
            <span>School :</span> Arpan Education & Higher Secondory School
          </strong>
          <br />
          <span>SSC :</span> 10<sup>th</sup> <br />
          <span>Passing Year:</span> 2018
          <br />
          <span>Percentage :</span> 80%
          <br />
        </li>
      </ul>
    </div>
  );
}

export default ShowEducation;
