/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useMutation } from "react-query";
// import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleCloseLog = () => setShow(false);
  const handleShowLog = () => setShow(true);

  // const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const [Login, setLogin] = useState({});
  const updateLogin = (e) => {
    setLogin({
      ...Login,
      [e.target.name]: e.target.value,
    });
  };

  const submit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(Login);

      const response = await API.post("/login", body, config);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful Login",
        showConfirmButton: false,
        timer: 5000,
      });
      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Incorrect Email/Password",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  });

  // const submit = (e) => {
  //   e.preventDefault();
  //   const dataRegs = JSON.parse(localStorage.getItem("dataReg"));
  //   dataRegs.map((data) => {
  //     if (data.email == Login.email && data.password == Login.password) {
  //       return (
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Successful Login",
  //           showConfirmButton: false,
  //           timer: 5000,
  //         }),
  //         localStorage.setItem("Login", JSON.stringify(data)),
  //         handleCloseLog(),
  //         setInterval(() => {
  //           navigate(0);
  //         }, 2000)
  //       );
  //     }
  //     if (data.email !== Login.email && data.password !== Login.password) {
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: "Incorrect Email/Password",
  //         showConfirmButton: false,
  //         timer: 5000,
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      <Button
        onClick={handleShowLog}
        variant="outline-light"
        className="btn-log"
      >
        Login
      </Button>
      <Modal className="mt-5" show={show} onHide={handleCloseLog}>
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-between"
        >
          <img
            src={require("../images/palm.png")}
            alt="palm"
            style={{ width: "135px" }}
          />
          <img src={require("../images/hibiscus.png")} alt="" />
        </div>
        <Modal.Title
          style={{ marginTop: "-50px" }}
          className="text-center fw-bold"
        >
          Login
        </Modal.Title>
        <Modal.Body>
          <Form onSubmit={(e) => submit.mutate(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold mt-3">Email</Form.Label>
              <Form.Control
                name="email"
                onChange={updateLogin}
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold mt-3">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={updateLogin}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="mt-4 m-auto"
              style={{
                backgroundColor: "#FFAF00",
                border: "none",
                width: "100%",
              }}
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
        <p className="text-center p-1 mt-1" style={{ color: "#B1B1B1" }}>
          Don't have an account?
          <a
            className="text-decoration-none"
            style={{ color: "#B1B1B1" }}
            href="#"
          >
            Klik Here
          </a>
        </p>
      </Modal>
    </div>
  );
};

export default Login;
