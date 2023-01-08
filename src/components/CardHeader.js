import React from "react";
import Card from "react-bootstrap/Card";
import cardlogo1 from "../images/cardlogo1.png";
import cardlogo2 from "../images/cardlogo2.png";
import cardlogo3 from "../images/cardlogo3.png";
import cardlogo4 from "../images/cardlogo4.png";

const CardHeader = () => {
  const dataCardHeader = [
    {
      image: cardlogo1,
      tittle: "Best Price Guarantee",
      content: "A small river named Duren flows by their place and supplies",
    },
    {
      image: cardlogo2,
      tittle: "Travellers Love Us",
      content: "A small river named Duren flows by their place and supplies",
    },
    {
      image: cardlogo3,
      tittle: "Best Travel Agent",
      content: "A small river named Duren flows by their place and supplies",
    },
    {
      image: cardlogo4,
      tittle: "Our Dedicated Support",
      content: "A small river named Duren flows by their place and supplies",
    },
  ];

  const renderCardHeader = (card, index) => {
    return (
      <Card
        style={{
          width: "250px",
          margin: "0 25px",
          padding: "53px 21px 10px 21px",
          border: "none",
        }}
        className="grid rounded-1"
        key={index}
      >
        <Card.Img
          variant="top"
          className="m-auto"
          style={{ width: "70px" }}
          src={card.image}
        />
        <Card.Body style={{ marginTop: "24px" }}>
          <Card.Title>{card.tittle}</Card.Title>
          <Card.Text>{card.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <container
        className="d-flex justify-content-center"
        style={{ width: "100%", marginTop: "-60px" }}
      >
        {dataCardHeader.map(renderCardHeader)}
      </container>
    </>
  );
};

export default CardHeader;
