// import React from "react";
// import { Link } from "react-router-dom";

// function ContectMe() {
//   return (
//     <div  id="contact"  className="dark:bg-gray-800">
//       <h1 className="py-5 text-3xl text-gray-700 dark:text-white  text-center font-bold   w-full ">
//         <span className="border-b border-gray-700 rounded bg-none">
//           Contact Me{" "}
//         </span>
//       </h1>
//       <div className="dark:bg-gray-800  flex md:flex-row flex-col">
//         <div className="md:w-1/2  w-full md:mb-20  mb-10 dark:text-white ">
//           <p className="mt-5  text-center md:text-start sm:pl-10">
//             <i className="fa-solid fa-paper-plane text-indigo-600 text-lg me-2"></i>
//             abhaysuthar7777@gmail.com
//           </p>
//           <p className="mt-5  text-center md:text-start sm:pl-10">
//             <i classNAme="fa-solid fa-phone text-indigo-600 text-lg me-2"></i>
//             8780299065
//           </p>
//           <div class="mt-5  text-center md:text-start sm:pl-10">
//             <Link
//               className="mx-1  hover:-translate-y-2  hover:text-indigo-700 text-lg"
//               target="_blank"
//               to="https://wa.me/918780299065"
//               rel="noopener"
//             >
//               <i class="fa-brands fa-whatsapp"></i>
//             </Link>
//             <Link
//               className="mx-1 hover:-translate-x-2  hover:text-indigo-700 text-lg"
//               target="_blank"
//               to="https://github.com/abhay3690"
//               rel="noopener"
//             >
//               <i class="fa-brands fa-github"></i>
//             </Link>
//             <Link
//               className="mx-1 hover:-translate-x-2  hover:text-indigo-700 text-lg"
//               target="_blank"
//               to="https://www.linkedin.com/in/abhay-s-44ba76269"
//               rel="noopener"
//             >
//               <i class="fa-brands fa-linkedin"></i>
//             </Link>
//             <Link
//               className="mx-1 hover:-translate-x-2  hover:text-indigo-700 text-lg"
//               target="_blank"
//               to="https://www.youtube.com/channel/UCRxufHuM4J28aaHw3lcuPjQ"
//               rel="noopener"
//             >
//               <i class="fa-brands fa-youtube"></i>
//             </Link>
//             <Link
//               className="mx-1 hover:-translate-x-2  hover:text-indigo-700 text-lg"
//               target="_blank"
//               to="https://www.instagram.com/abhii_3690/"
//               rel="noopener"
//             >
//               <i class="fa-brands fa-instagram"></i>
//             </Link>
//           </div>
//           <div className="mt-10  text-center md:text-start sm:pl-10 ">
//             <a
//               className="px-4   py-2 bg-indigo-700 border rounded text-white "
//               href={process.env.PUBLIC_URL + "/resume/Abhay_Suthar_Resumee.pdf"}
//               download="Abhay_Suthar_Resumee.pdf"
//             >
//               Download CV
//             </a>
//           </div>
//         </div>
//         <div class="md:w-1/2 w-full  p-4  mb-12 ">
//           <form name="submit-to-google-sheet" className="flex flex-col h-72">
//             <input
//               className=" border border-gray-500  w-full mt-5  dark:text-white dark:bg-gray-700 dark:border-indigo-500 p-3 text-black rounded"
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Your Name"
//               required
//             />
//             <input
//               className=" border border-gray-500  w-full mt-5  dark:text-white dark:bg-gray-700 dark:border-indigo-500 p-3 text-black rounded"
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Your Email"
//               required
//             />
//             <textarea
//               className=" border border-gray-500  w-full mt-5  dark:text-white dark:bg-gray-700 dark:border-indigo-500 p-3 text-black rounded"
//               name="message"
//               placeholder="Your Message"
//               rows="6"
//             ></textarea>
//             <div className="w-full mt-5">
//               <button
//                 type="submit"
//                 className="px-4 py-2 w-full bg-indigo-700 border rounded text-white"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//           <span id="msg"></span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContectMe; 


import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMsg("Form submitted successfully");
        setFormData({ name: "", email: "", message: "" });

        // Automatically remove the message after 3 seconds
        setTimeout(() => {
          setResponseMsg("");
        }, 3000);
      }  else {
        setResponseMsg("Failed to submit form");

        // Automatically remove the message after 3 seconds
        setTimeout(() => {
          setResponseMsg("");
        }, 3000);
      }
    } catch (error) {
      setResponseMsg("An error occurred: " + error.message);
    }
  };

  return (
    <div id="contact" className="dark:bg-gray-800">
      <h1 className="py-5 text-3xl text-gray-700 dark:text-white text-center font-bold w-full">
        <span className="border-b border-gray-700 rounded bg-none">
          Contact Me
        </span>
      </h1>
      <div className="dark:bg-gray-800 flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full md:mb-20 mb-10 dark:text-white">
          <p className="mt-5 text-center md:text-start sm:pl-10">
            <i className="fa-solid fa-paper-plane text-indigo-600 text-lg me-2"></i>
            abhaysuthar7777@gmail.com
          </p>
          <p className="mt-5 text-center md:text-start sm:pl-10">
            <i className="fa-solid fa-phone text-indigo-600 text-lg me-2"></i>
            8780299065
          </p>
          <div className="mt-5 text-center md:text-start sm:pl-10">
            <a
              className="mx-1 hover:-translate-y-2 hover:text-indigo-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/918780299065"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              className="mx-1 hover:-translate-x-2 hover:text-indigo-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abhay3690"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="mx-1 hover:-translate-x-2 hover:text-indigo-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abhay-s-44ba76269"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="mx-1 hover:-translate-x-2 hover:text-indigo-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCRxufHuM4J28aaHw3lcuPjQ"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              className="mx-1 hover:-translate-x-2 hover:text-indigo-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/abhii_3690/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="mt-10 text-center md:text-start sm:pl-10">
            <a
              className="px-4 py-2 bg-indigo-700 border rounded text-white"
              href={process.env.PUBLIC_URL + "/resume/Abhay_Suthar_Resumee.pdf"}
              download="Abhay_Suthar_Resumee.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-4 mb-12">
          <form className="flex flex-col h-72" onSubmit={handleSubmit}>
            <input
              className="border border-gray-500 w-full mt-5 dark:text-white dark:bg-gray-700 dark:border-indigo-500 p-3 text-black rounded"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="border border-gray-500 w-full mt-5 dark:text-white dark:bg-gray-700 dark:border-indigo-500 p-3 text-black rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="border border-gray-500 w-full mt-5 dark:text-white dark:bg-gray-700 dark:border-indigo-500 p-3 text-black rounded"
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="w-full mt-5">
              <button
                type="submit"
                className="px-4 py-2 w-full bg-indigo-700 border rounded text-white"
              >
                Submit
              </button>
            </div>
          </form>
          <span id="msg">{responseMsg}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
