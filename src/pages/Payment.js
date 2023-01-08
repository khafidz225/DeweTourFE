/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import navbarModule from "../navbar.module.css";
import Navbar from "../components/Navbar";
import ModalInfo from "../components/ModalInfo";
import { useParams, useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import dateFormat from "dateformat";
import { API } from "../config/api";
import Swal from "sweetalert2";
import { useMutation, useQuery } from "react-query";

const Payment = ({ Number, SetDataPay }) => {
  const navigate = useNavigate();
  const dataLog = JSON.parse(localStorage.getItem("Login"));
  const idUser = localStorage.getItem("idUser");
  const [datas, setDatas] = useState();

  const params = useParams();

  const dataTrip = async () => {
    try {
      const response = await API.get("/trip/" + params.id);
      const trip = response.data.data;
      setDatas(trip);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataTrip();
  }, []);

  let { data: user } = useQuery("userCache", async () => {
    const response = await API.get("/users/" + idUser);
    return response.data.data;
  });

  console.log(user);
  const [modalInfoShow, setModalInfoShow] = useState(false);

  let todos = [];
  const addPayment = () => {
    todos.push({
      Title: datas?.title,
      Country: datas?.country.name,
      FullName: user.fullName,
      Phone: user.phone,
      Status: "Waiting Payment",
      Qty: Number,
      Price: datas?.price * Number,
    });

    SetDataPay(todos);
  };

  const handleBuy = useMutation(async () => {
    try {
      console.log(datas);
      const data = {
        total: datas?.price * Number,
        counterqty: Number,
        trip_id: datas?.id,
        user_id: user?.id,
        status: "test",
      };
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/transaction", data, config);

      console.log(response);
      //Mengambil token dari transaction
      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result);
          navigate("/");
        },
        onPending: function (result) {
          console.log(result);
          navigate("/");
        },
        onError: function (result) {
          console.log(result);
        },
        onClose: function () {
          Swal.fire({
            title: "Colector",
            text: "",
            imageUrl:
              "https://scontent.fcgk6-2.fna.fbcdn.net/v/t39.30808-6/322863036_666032295258192_7360375559098508003_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=SLk6zncj72UAX_vL4DC&_nc_ht=scontent.fcgk6-2.fna&oh=00_AfBCySHcAxyRnB76EA_WXGhY4jot4o4OLFBNhcUXoXqaeg&oe=63B638CE",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "SB-Mid-client-19eEoe4caCfhnEoE";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div style={{ backgorunColor: "#E5E5E5", height: "800px" }}>
      <Navbar navStyle={navbarModule.detailNav} />

      <Container
        className="border border-0 rounded-1 p-5"
        style={{ backgroundColor: "white", marginTop: "66px" }}
      >
        <div className="d-flex justify-content-between">
          <img
            style={{ height: "68px", alignItems: "center" }}
            src={require("../images/Iconblk.png")}
            alt=""
          />
          <div>
            <h1>Booking</h1>
            <p>Saturday, 22 Juy 2020</p>
          </div>
        </div>

        <div className="d-flex justify-content-between ">
          {/* Title && Country */}
          <div className="text-start">
            <h2>{datas?.title}</h2>
            <p>{datas?.country.name}</p>

            <p
              className="p3"
              style={{
                color: "#EC7A7A",
                width: "120px",
                background: "linearGradient(180deg, #EC7A7A 0%, #EC7A7A 100%)",
                opacity: "0.8",
                bordeRadius: "2px",
                fontSize: "12px",
              }}
            >
              Waiting payment
            </p>
          </div>

          {/* Detail Trip */}
          <div
            className="d-grid text-start "
            style={{
              gridTemplateColumns: "auto auto",
              columnGap: "50px",
              rowGap: "25px",
            }}
          >
            <div>
              <h3 className="fs-4 fw-semibold">Date Trip</h3>
              <p>{dateFormat(datas?.dateTrip, "dd mmmm yyyy")}</p>
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Duration</h3>
              <p>
                {datas?.day} Day {datas?.night} Night
              </p>
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Accomodation</h3>
              <p>{datas?.accomodation}</p>
            </div>
            <div>
              <h3 className="fs-4 fw-semibold">Transporartion</h3>
              <p>{datas?.transportation}</p>
            </div>
          </div>

          {/* image payment */}
          <div>
            <img src={require("../images/bon.png")} alt="bon" />
            <p className="fw-6 ">upload payment proof</p>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{user?.fullname}</td>
              <td>Male</td>
              <td>{user?.phone}</td>
              <th>Qty</th>
              <th>:</th>
              <th className="text-end">{Number}</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Total</th>
              <th>:</th>
              <th className="d-flex justify-content-end">
                <NumericFormat
                  className="text-end text-danger fw-bold"
                  style={{
                    border: "none",
                    background: "none",
                    width: "150px",
                  }}
                  value={datas?.price * Number}
                  thousandSeparator=","
                  prefix={"IDR. "}
                />
              </th>
            </tr>
          </tbody>
        </table>
      </Container>

      <div className="d-flex justify-content-end mt-5">
        <button
          style={{
            width: "213px",
            padding: "12px",
            backgroundColor: "#FFAF00",
            border: "none",
            marginRight: "140px",
          }}
          className="rounded-1"
          onClick={() => handleBuy.mutate()}
        >
          Pay
        </button>
        <ModalInfo
          show={modalInfoShow}
          onHide={() => setModalInfoShow(false)}
          addPayment={addPayment}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
