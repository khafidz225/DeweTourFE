import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalInfo = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalBody>
          <p className="text-center">
            Your payment will be confirmed within 1 x 24 hours To see orders
            click{" "}
            <Link
              style={{ cursor: "pointer" }}
              onClick={props.addPayment}
              to={"/paymentpending"}
            >
              Here
            </Link>{" "}
            thank you
          </p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalInfo;
