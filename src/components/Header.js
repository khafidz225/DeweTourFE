import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../index.css";
import Navbars from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="bg-homepage">
        <Navbars />
        <Container className="hero-content text-start">
          <h1 className="title-hero text-white" style={{ lineHeight: "15px" }}>
            Explore
          </h1>
          <p className="title-hero text-white fw-light mt-0 p-0 mb-5">
            your amazing city together
          </p>
        </Container>

        <Container>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              className="btn fw-bold"
              style={{
                backgroundColor: "#FFAF00",
                padding: "10px",
                color: "white",
                border: "none",
                width: "136px",
              }}
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </Container>
      </div>
    </>
  );
};

export default Header;
