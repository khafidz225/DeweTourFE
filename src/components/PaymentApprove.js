import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { NumericFormat } from "react-number-format";

const PaymentApprove = () => {
  const idUser = localStorage.getItem("idUser");
  let { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transaction");
    return response.data.data;
  });
  return (
    <div>
      {transaction?.map(
        (data) =>
          data?.user.id == idUser &&
          data?.status == "success" && (
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
                <div className="text-start">
                  <h2>{data?.trip.title}</h2>
                  <p>{data?.trip.country.name}</p>

                  <p
                    className="p-2 text-center"
                    style={{
                      color: "#0BDC5F",
                      width: "120px",
                      backgroundColor: "#bbffb1",
                      opacity: "0.8",
                      bordeRadius: "2px",
                      fontSize: "12px",
                    }}
                  >
                    Approve
                  </p>
                </div>

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
                    <p>{data?.trip.daterip}</p>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-semibold">Duration</h3>
                    <p>
                      {data?.trip.day} Day {data?.trip.night} Night
                    </p>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-semibold">Accomodation</h3>
                    <p>{data?.trip.accomodation}</p>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-semibold">Transporartion</h3>
                    <p>{data?.trip.transportation}</p>
                  </div>
                </div>

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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>{data?.user.fullname}</td>
                    <td>Male</td>
                    <td>{data?.user.phone}</td>
                    <th>Qty :</th>
                    <th>{data?.counterqty}</th>
                  </tr>
                </tbody>
              </table>
              <div
                className="d-flex justify-content-end me-0"
                style={{ width: "100%" }}
              >
                <div className="d-flex justicy-content-between me-5">
                  <p>Total</p>
                  <p>:</p>
                </div>
                {/* <p className="ms-5">IDR. 12,398,000</p> */}
                <NumericFormat
                  className="ms-5 border-0 text-end"
                  value={data?.total}
                  thousandSeparator=","
                  prefix={"IDR. "}
                />
              </div>
            </Container>
          )
      )}
    </div>
  );
};

export default PaymentApprove;
