import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import ModalApprove from "../components/ModalApprove";
import Navbars from "../components/Navbar";
import navbarModule from "../navbar.module.css";

const ListTransaksi = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <ModalApprove show={modalShow} onHide={() => setModalShow(false)} />
      <Navbars navStyle={navbarModule.detailNav} />
      <Container
        className="text-start"
        style={{ marginTop: "70px", height: "500px" }}
      >
        <h1>Incoming Transaction</h1>
        <Table striped style={{ backgroundColor: "white" }}>
          <thead>
            <th className="p-3">No</th>
            <th className="p-3">Users</th>
            <th className="p-3">Trip</th>
            <th className="p-3">Bukti Transfer</th>
            <th className="p-3">Status Payment</th>
            <th className="p-3">Action</th>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">1</td>
              <td className="p-3">Khafidz</td>
              <td className="p-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="p-3">bca.jpg</td>
              <td className="p-3 text-warning">Pending</td>
              <td className="p-3">
                <img
                  onClick={() => setModalShow(true)}
                  style={{ cursor: "pointer" }}
                  src={require("../images/searchAdmin.png")}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td className="p-3">2</td>
              <td className="p-3">Kukuh</td>
              <td className="p-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="p-3">bca.jpg</td>
              <td className="p-3 text-success">Approve</td>
              <td className="p-3">
                <img
                  onClick={() => setModalShow(true)}
                  style={{ cursor: "pointer" }}
                  src={require("../images/searchAdmin.png")}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td className="p-3">3</td>
              <td className="p-3">Rifki</td>
              <td className="p-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="p-3">bca.jpg</td>
              <td className="p-3 text-danger">Canced</td>
              <td className="p-3">
                <img
                  onClick={() => setModalShow(true)}
                  style={{ cursor: "pointer" }}
                  src={require("../images/searchAdmin.png")}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td className="p-3">4</td>
              <td className="p-3">Faris</td>
              <td className="p-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="p-3">bca.jpg</td>
              <td className="p-3 text-warning">Pending</td>
              <td className="p-3">
                <img
                  onClick={() => setModalShow(true)}
                  style={{ cursor: "pointer" }}
                  src={require("../images/searchAdmin.png")}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td className="p-3">5</td>
              <td className="p-3">Imam</td>
              <td className="p-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="p-3">bca.jpg</td>
              <td className="p-3 text-success">Approve</td>
              <td className="p-3">
                <img
                  onClick={() => setModalShow(true)}
                  style={{ cursor: "pointer" }}
                  src={require("../images/searchAdmin.png")}
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td className="p-3">6</td>
              <td className="p-3">Oci</td>
              <td className="p-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="p-3">bca.jpg</td>
              <td className="p-3 text-warning">Pending</td>
              <td className="p-3">
                <img
                  onClick={() => setModalShow(true)}
                  style={{ cursor: "pointer" }}
                  src={require("../images/searchAdmin.png")}
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
};

export default ListTransaksi;
