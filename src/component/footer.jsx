import { NavLink } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <>
      <NavLink to="/details">
        <div className="flex w-7xl ">
          <div className="w-[25%] text-center mx-auto p-2 rounded-2xl bg-gray-300">
            Next Page
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Footer;
