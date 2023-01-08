import React from "react";
import Modal from "react-bootstrap/Modal";
import { dataTour } from "../dataTour";
import { Container } from "react-bootstrap";
import { NumericFormat } from "react-number-format";

const ModalApprove = (props) => {
  const data = dataTour();

  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container
            className="border border-0 rounded-1 p-5"
            style={{ backgroundColor: "white" }}
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
                <h2>Hallo</h2>
                <p>Indonesia</p>

                <p
                  className="p3"
                  style={{
                    color: "#EC7A7A",
                    width: "120px",
                    background:
                      "linearGradient(180deg, #EC7A7A 0%, #EC7A7A 100%)",
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
                  <p>26 Agust 2020</p>
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold">Duration</h3>
                  <p>6 Day 4 Night</p>
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold">Accomodation</h3>
                  <p>Hotel 4 Nights</p>
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold">Transporartion</h3>
                  <p>Qatar Airways</p>
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
                  <td>Khafidz Maulana</td>
                  <td>Male</td>
                  <td>0881</td>
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
                      value={data.price * Number}
                      thousandSeparator=","
                      prefix={"IDR. "}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <button
                className="fw-bold fs-6 text-white p-2 border-0 rounded-2 me-3"
                style={{ backgroundColor: "#FF0742", width: "100px" }}
              >
                Cancel
              </button>
              <button
                className="fw-bold fs-6 text-white p-2 border-0 rounded-2 me-3"
                style={{ backgroundColor: "#0ACF83", width: "100px" }}
              >
                Approve
              </button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalApprove;
