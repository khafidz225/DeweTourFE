import React from "react";

const infoTrip = () => {
  return (
    <>
      <div>
        <h5>Accommodation</h5>
        <div className="d-flex">
          <img src={require("../images/hotel.png")} alt="" />
          <h4 className="ms-2">Hotel 4 Nights</h4>
        </div>
      </div>
      <div>
        <h5>Transportation</h5>
        <div className="d-flex">
          <img src={require("../images/plane.png")} alt="" />
          <h4 className="ms-2">Qatar Airways</h4>
        </div>
      </div>
      <div>
        <h5>Eat</h5>
        <div className="d-flex">
          <img src={require("../images/meal.png")} alt="" />
          <h4 className="ms-2">Included as ltinerary</h4>
        </div>
      </div>
      <div>
        <h5>Duration</h5>
        <div className="d-flex">
          <img src={require("../images/time.png")} alt="" />
          <h4 className="ms-2">6 Day 4 Night</h4>
        </div>
      </div>
      <div>
        <h5>Date Trip</h5>
        <div className="d-flex">
          <img
            className="ms-2"
            src={require("../images/calender.png")}
            alt=""
          />
          <h4>26 Agustus 2020</h4>
        </div>
      </div>
    </>
  );
};

export default infoTrip;
