import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import Swal from "sweetalert2";

function AddCountry(props) {
  const [country, setCountry] = useState();

  const changeValue = (e) => {
    setCountry({
      ...country,
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

      const body = JSON.stringify(country);
      const response = await API.post("/country", body, config);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Create an Country",
        showConfirmButton: false,
        timer: 5000,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Fill out the Form",
        showConfirmButton: false,
        timer: 5000,
      });
      console.log(error);
    }
  });

  //   let { data: country } = useQuery("countryCache", async () => {
  //     const response = await API;
  //   });

  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ width: "100%" }} className="d-flex justify-content-between">
        <img
          src={require("../images/palm.png")}
          alt="palm"
          style={{ width: "135px" }}
        />
        <img
          src={require("../images/hibiscus.png")}
          alt="rose"
          style={{ width: "135px" }}
        />
      </div>
      <h3 className="fw-bold text-center" style={{ marginTop: "-50px" }}>
        Add Country
      </h3>
      <Modal.Body>
        <Form onSubmit={(e) => submit.mutate(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label className="fs-3">Country</Form.Label> */}
            <Form.Control
              className="mt-2 m-auto"
              style={{ width: "90%" }}
              onChange={changeValue}
              name="name"
              type="text"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              style={{
                width: "150px",
                backgroundColor: "#FFAF00",
                border: "none",
              }}
              className="mt-4"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// function App() {
//   const [modalCountry, setModalCountry] = useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalCountry(true)}>
//         Launch vertically centered modal
//       </Button>

//       <AddCountry show={modalCountry} onHide={() => setModalCountry(false)} />
//     </>
//   );
// }

export default AddCountry;
