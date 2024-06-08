import React from "react";
import FourColumn from "../components/FourColumn";
import Slider from "../components/Slider";
import image05 from "../assets/img/05.webp";
import image06 from "../assets/img/06.webp";
import image07 from "../assets/img/07.webp";
import image08 from "../assets/img/08.webp";
import Section from "../components/Section";
import Bannner from "../components/Banner";

const Foods = () => {
  const images = {
    image1: image05,
    image2: image06,
    image3: image07,
    image4: image08,
  };

  return (
    <div className="container-fluid main-div">
      {/* slider */}
      <Slider />
      {/* four colum layout resuable */}
      <FourColumn images={images} />

      <Section />

      <Bannner />
    </div>
  );
};

export default Foods;
