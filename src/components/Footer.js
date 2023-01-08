import React from "react";
import leaf from "../images/leaf.png";

const Footer = () => {
  return (
    <>
      <div
        className="mt-5 mb-0 pb-0 position-relative"
        style={{ width: "100%", backgroundColor: "#FFAF00" }}
      >
        <img
          src={leaf}
          alt="leaf"
          className=" m-0 p-0 end-0 leaf position-absolute"
        />
        <p className="m-0 p-3 text-white text-center">
          Copyright 2020 Dewe Tour - Your Name - NIS. All Rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
