import React from "react";
import PropTypes from "prop-types";

const FourColumn = (props) => {
  return (
    <div className="container-fluid">
      <div className="row m-3">
        <div className="col-md-3">
          <img src={props.images.image1} className="img-fluid" />
        </div>
        <div className="col-md-3">
          <img src={props.images.image2} className="img-fluid" />
        </div>
        <div className="col-md-3">
          <img src={props.images.image3} className="img-fluid" />
        </div>
        <div className="col-md-3">
          <img src={props.images.image4} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
FourColumn.propTypes = {
  images: PropTypes.object,
};

FourColumn.defaultProps = {
  message: "Hello",
  images: [],
};
export default FourColumn;
