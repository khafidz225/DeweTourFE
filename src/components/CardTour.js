import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const CardTour = ({ Number }) => {
  const Navigate = useNavigate();
  const [datas, setDatas] = useState();

  const incomeTrip = JSON.parse(localStorage.getItem("incomeTrip"));
  const dataTrip = async () => {
    try {
      const trip = await API.get("/trip");
      const trips = trip.data.data;

      setDatas(trips);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataTrip();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "72px" }} className="">
        <div className="container-tour">
          {datas?.map((data) => (
            <Card style={{ width: "350px" }}>
              <Card.Img
                onClick={() => Navigate(`detail/${data.id}`)}
                variant="top"
                src={data.image}
              />
              <p
                className="position-absolute text-end p-1 mt-2 rounded-start end-0"
                style={{
                  backgroundColor: "white",
                  width: "62px",
                }}
              >
                {`${data.quota}`}
              </p>
              <Card.Body>
                <Card.Title className="text-start">{data.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <NumericFormat
                    className="text-start"
                    style={{
                      border: "none",
                      width: "50%",
                      background: "none",
                      color: "#FFAF00",
                    }}
                    value={data.price}
                    thousandSeparator=","
                    prefix={"IDR. "}
                  />
                  <Card.Text style={{ color: "#878787" }}>
                    {data.country.name}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CardTour;
