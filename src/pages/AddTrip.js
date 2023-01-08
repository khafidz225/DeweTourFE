import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import navbarModule from "../navbar.module.css";
import Navbars from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../config/api";
import Select from "react-select";

const AddTrip = () => {
  const [AddTrip, SetAddTrip] = useState();
  const [datas, setDatas] = useState([]);
  const Navigate = useNavigate();

  const takeValueTrip = (e) => {
    SetAddTrip({
      ...AddTrip,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const checkCountry = async () => {
    try {
      const country = await API.get("/country");
      const countrys = country.data.data;
      setDatas(countrys.sort((data, i) => data.name.localeCompare(i.name)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkCountry();
  }, []);

  const submit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("title", AddTrip.title);
      formData.set("country_id", AddTrip.country_id);
      formData.set("accomodation", AddTrip.accomodation);
      formData.set("transportation", AddTrip.transportation);
      formData.set("eat", AddTrip.eat);
      formData.set("day", AddTrip.day);
      formData.set("night", AddTrip.night);
      formData.set("date_trip", AddTrip.date_trip);
      formData.set("price", AddTrip.price);
      formData.set("quota", AddTrip.quota);
      formData.set("description", AddTrip.description);
      formData.set("image", AddTrip.image[0], AddTrip.image[0].name);

      const response = await API.post("/trip", formData, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Navbars navStyle={navbarModule.detailNav} />
      <Container className="text-start mt-5">
        <h1 className="fs-2 fw-bold mb-3">Add Trip</h1>
        <Form onSubmit={(e) => submit.mutate(e)} className="fw-bold">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title Trip</Form.Label>
            <Form.Control onChange={takeValueTrip} name="title" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            {/* <Form.Control
              onChange={takeValueTrip}
              name="country_id"
              type="text"
            >

            </Form.Control> */}
            {/* <Select
              options={datas}
              // onChange={takeValueTrip}
              // value={datas.map((data) => data.value)}
              name="country_id"
            >
               <option value="" key="">
                {datas}
              </option> 
            </Select> */}
            <Form.Select onChange={takeValueTrip} name="country_id">
              {datas.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Accommodation</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="accomodation"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Transportation</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="transportation"
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Eat</Form.Label>
            <Form.Control onChange={takeValueTrip} name="eat" type="text" />
          </Form.Group>

          <Form.Label>Duration</Form.Label>
          <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
            <Form.Control
              onChange={takeValueTrip}
              name="day"
              style={{ width: "200px" }}
              type="text"
            />
            <Form.Label className="m-2 me-5">Day</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="night"
              style={{ width: "200px" }}
              type="text"
            />
            <Form.Label className="m-2 me-5">Night</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date Trip</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="date_trip"
              type="date"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={takeValueTrip} name="price" type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Quota</Form.Label>
            <Form.Control onChange={takeValueTrip} name="quota" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              name="description"
              as="textarea"
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={takeValueTrip}
              id="image"
              name="image"
              style={{ width: "400px" }}
              type="file"
            />
          </Form.Group>

          <div className="text-center mt-5">
            <Button
              style={{
                backgroundColor: "#FFAF00",
                width: "250px",
                border: "none",
              }}
              className="p-2 fw-bold fs-5"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AddTrip;
