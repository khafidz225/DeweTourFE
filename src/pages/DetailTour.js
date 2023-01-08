/* eslint-disable eqeqeq */
import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { NumericFormat } from "react-number-format";
import australia2 from "../images/australia2.png";
import australia3 from "../images/australia3.png";
import australia4 from "../images/australia4.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import navbarModule from "../navbar.module.css";
import "../index.css";
import ModalDetail from "../components/ModalDetail";
import dateFormat from "dateformat";
import { API } from "../config/api";

const DetailTour = ({ Number, SetNumber }) => {
  const [modalShow, setModalShow] = useState(false);
  const [datas, setDatas] = useState();
  const token = localStorage.getItem("token");
  const params = useParams();

  const incomeTrip = JSON.parse(localStorage.getItem("incomeTrip"));

  const dataTrip = async () => {
    try {
      const response = await API.get("/trip");
      const trips = response.data.data;
      setDatas(trips);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataTrip();
  }, []);

  function Add() {
    SetNumber(Number + 1);
  }
  function Less() {
    if (Number > 0) {
      SetNumber(Number - 1);
    }
  }

  return (
    <>
      <Navbar navStyle={navbarModule.detailNav} />
      {datas?.map(
        (data) =>
          data?.id == params.id && (
            <Container className="mt-5">
              <h1 className="text-start">{data?.title}</h1>
              <p className="text-start">{data?.country.name}</p>
              {/* Image */}
              <div className="container">
                <div className="rows" style={{ backgroundSize: "cover" }}>
                  <img
                    src={data?.image}
                    alt="australia"
                    style={{
                      width: "100%",
                      height: "360px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="rows d-flex justify-content-between mt-4">
                  <img
                    style={{ width: "400px" }}
                    src={australia2}
                    alt="detailimg"
                  />
                  <img
                    style={{ width: "400px" }}
                    src={australia3}
                    alt="detailimg"
                  />
                  <img
                    style={{ width: "400px" }}
                    src={australia4}
                    alt="detailimg"
                  />
                </div>
              </div>

              <h3 className="text-start mt-5 mb-4">Informasi Trip</h3>
              <div className="d-flex justify-content-between text-start mb-5">
                {/* InFormasi Trip */}
                <div>
                  <h5>Accommodation</h5>
                  <div className="d-flex">
                    <img src={require("../images/hotel.png")} alt="" />
                    <h4 className="ms-2">{data?.accomodation}</h4>
                  </div>
                </div>
                <div>
                  <h5>Transportation</h5>
                  <div className="d-flex">
                    <img src={require("../images/plane.png")} alt="" />
                    <h4 className="ms-2">{data?.transportation}</h4>
                  </div>
                </div>
                <div>
                  <h5>Eat</h5>
                  <div className="d-flex">
                    <img src={require("../images/meal.png")} alt="" />
                    <h4 className="ms-2">{data?.eat}</h4>
                  </div>
                </div>
                <div>
                  <h5>Duration</h5>
                  <div className="d-flex">
                    <img src={require("../images/time.png")} alt="" />
                    <h4 className="ms-2">
                      {data?.day} Day {data?.night} Night
                    </h4>
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
                    <h4>{dateFormat(data?.datetrip, "dd mmmm yyyy")}</h4>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-start">Description</h3>
                <p className="text-start">{data?.description}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom border-dark mt-5">
                <p className="fs-3 fw-bold">
                  <span style={{ color: "#FFAF00" }}>
                    <NumericFormat
                      className="text-start fw-bold"
                      style={{
                        border: "none",
                        width: "250px",
                        background: "none",
                        color: "#FFAF00",
                      }}
                      value={data?.price}
                      thousandSeparator=","
                      prefix={"IDR. "}
                    />
                  </span>{" "}
                  / Person
                </p>
                <div className="d-flex">
                  <button className="border-0 bg-transparent" onClick={Less}>
                    <img src={require("../images/Minus.png")} alt="Minus" />
                  </button>
                  <p className="ms-3 me-3 text-bold fs-4 p-1">{Number}</p>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => Add()}
                  >
                    <img src={require("../images/Plus.png")} alt="Plus" />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2 fs-3 fw-bold border-bottom border-dark">
                <p>Total :</p>
                <NumericFormat
                  className="text-end"
                  style={{ border: "none", background: "none" }}
                  value={data?.price * Number}
                  thousandSeparator=","
                  prefix={"IDR. "}
                />
              </div>
              <div className="d-flex justify-content-end">
                {token !== null ? (
                  <Link to={`/payment/${data?.id}`}>
                    <button
                      className="btn mt-5 mb-5"
                      style={{
                        backgroundColor: "#FFAF00",
                        color: "white",
                        width: "213px",
                      }}
                    >
                      Book Now
                    </button>
                  </Link>
                ) : (
                  <div>
                    <button
                      className="btn mt-5 mb-5"
                      style={{
                        backgroundColor: "#FFAF00",
                        color: "white",
                        width: "213px",
                      }}
                      onClick={() => {
                        setModalShow(true);
                      }}
                    >
                      Book Now
                    </button>
                    <ModalDetail
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                )}
              </div>
            </Container>
          )
      )}
      <Footer />
    </>
  );
};

export default DetailTour;
