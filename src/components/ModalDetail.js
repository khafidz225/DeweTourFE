import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDetail = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        style={{ height: "500px" }}
      >
        <Modal.Body style={{ backgroundColor: "#FFAF00", borderRadius: "5px" }}>
          <p
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
            className="text-center"
          >
            Silahkan Login/Register untuk Melanjutkan Pembayaran
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalDetail;
