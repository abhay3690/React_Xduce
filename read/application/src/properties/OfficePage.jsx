import React from "react";

const OfficePage = () => {
    
  return (
    <>
     <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <a href="#">BrandName</a>
        </div>

        {/* Menu Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default OfficePage;
