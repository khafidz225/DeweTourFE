import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import navbarModule from "../navbar.module.css";
import PaymentApprove from "../components/PaymentApprove";
import { API } from "../config/api";

const Profile = () => {
  const [profile, setProfile] = useState();
  const dataLog = JSON.parse(localStorage.getItem("Login"));
  const idUser = localStorage.getItem("idUser");
  const dataTrip = async () => {
    try {
      const response = await API.get("/users/" + idUser);
      const user = response.data.data;
      setProfile(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataTrip();
  }, []);
  return (
    <div>
      <Navbar navStyle={navbarModule.detailNav} />
      <div
        className="m-auto p-5 rounded-2 mt-5"
        style={{ width: "785px", backgroundColor: "white" }}
      >
        <div className="d-flex justify-content-between">
          <div className="text-start ">
            <h1 className="fw-bold mb-5">Personal Info</h1>
            <div className="d-flex mt-5">
              <img
                style={{ width: "30px", height: "30px", marginTop: "15px" }}
                src={require("../images/name.png")}
                alt=""
              />
              <div className="ms-3">
                <h5 className="fw-bold" style={{ fontSize: "14px" }}>
                  {profile?.fullname}
                </h5>
                <p className="mt-2" style={{ fontSize: "12px" }}>
                  Full Name
                </p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <img
                style={{ width: "30px", height: "30px", marginTop: "15px" }}
                src={require("../images/email.png")}
                alt=""
              />
              <div className="ms-3">
                <h5 className="fw-bold" style={{ fontSize: "14px" }}>
                  {profile?.email}
                </h5>
                <p className="mt-2" style={{ fontSize: "12px" }}>
                  Email
                </p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <img
                style={{ width: "30px", height: "30px", marginTop: "15px" }}
                src={require("../images/phone.png")}
                alt=""
              />
              <div className="ms-3">
                <h5 className="fw-bold" style={{ fontSize: "14px" }}>
                  {profile?.phone}
                </h5>
                <p className="mt-2" style={{ fontSize: "12px" }}>
                  Mobile Phone
                </p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <img
                style={{ width: "30px", height: "30px", marginTop: "15px" }}
                src={require("../images/maps.png")}
                alt=""
              />
              <div className="ms-3">
                <h5 className="fw-bold" style={{ fontSize: "14px" }}>
                  {profile?.address}
                </h5>
                <p className="mt-2" style={{ fontSize: "12px" }}>
                  Address
                </p>
              </div>
            </div>
          </div>

          <div style={{ width: "280px" }}>
            <img
              className="rounded-2"
              src={require("../images/profilepicture.png")}
              alt=""
            />
            <button
              className="mt-3 border-0 p-2 rounded-2"
              style={{
                width: "100%",
                backgroundColor: "#FFAF00",
                color: "white",
              }}
            >
              Change Phote Profile
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "200px", marginBottom: "100px" }}>
        <Container>
          <h1 className="text-start">History Trip</h1>
          <PaymentApprove />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
