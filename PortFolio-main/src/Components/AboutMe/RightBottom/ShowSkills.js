import React from "react";

function ShowSkills() {
  return (
    <>
      <div
        className="sm:p-8 flex px-5 md:pl-5 lg:pl-20 sm:pl-20 "
        id="showSkills"
      >
        <ul className="">
          <li className="my-2">
            <span>
              <strong>Front-End Development</strong>
            </span>
            <br />
            <span className=" text-gray-500 dark:text-gray-400">HTML, CSS, JavaScript, TypeScript, Bootstrap, React</span>
          </li>
          <li className="my-2">
            <span>
              <strong>Back-End Development</strong>
            </span>
            <br />
            <span className="text-gray-500 dark:text-gray-400"> Node.js, JAVA, Spring-Boot, DBMS, MySQL, PostMan, MongoDB</span>
          </li>
          <li className="my-2">
            <span>
              <strong>Version Control</strong>
            </span>
            <br />
            <span className="text-gray-500 dark:text-gray-400"> Git, GitHub</span>
          </li>
         
          <li className="my-2">
            <span>
              <strong>Software Devloment</strong>
            </span>
            <br />
            <span className="text-gray-500 dark:text-gray-400">Web App and Application</span> 
          </li>
        </ul>
      </div>
    </>
  );
}

export default ShowSkills;
