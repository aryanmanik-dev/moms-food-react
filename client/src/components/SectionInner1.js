import React from "react";
import "./Styles.css";
import Steps from "../assets/img/Steps.webp";
const SectionInner1 = () => {
  return (
    <div className="inner-section">
      <h1 className="text-center heading-section">
        Best Lunch and Dinner Plans in Dubai
      </h1>
      <h4 className="text-center">Follow 4 Simple Steps:</h4>

      <div className="d-flex jusitfy-content-center">
        <img src={Steps} className="img-fluid" alt="" />
      </div>

      <h5 className="text-center mt-4">
        Select your favourite plan below & Subscribe{" "}
      </h5>

    </div>
  );
};

export default SectionInner1;
