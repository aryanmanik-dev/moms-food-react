import React from "react";
import BannerImage from "../assets/img/banner.webp";
const Banner = () => {
  return (
    <div className="banner mt-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <img src={BannerImage} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
