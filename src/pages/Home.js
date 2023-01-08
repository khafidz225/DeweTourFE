import React from "react";
import Header from "../components/Header";
import CardHeader from "../components/CardHeader";
import CardTour from "../components/CardTour";
import Footer from "../components/Footer";
const Home = ({ Number }) => {
  return (
    <div>
      <Header />
      <CardHeader />
      <h1 style={{ marginBottom: "60px", marginTop: "130px" }}>Group Tour</h1>
      <CardTour Number={Number} />
      <Footer />
    </div>
  );
};

export default Home;
