/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Med from "../assets/med-bg.jpg";

const Home = (props) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    // Navigate to a specific route
    navigate("/login");
  };

  
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: `url(${Med})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  };

  const titleContainerStyle = {
    marginBottom: "20px",
    fontSize: "3rem",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    marginTop: "20px",
  };

  const inputButtonStyle = {
    padding: "10px",
    backgroundColor: "#fff",
    color: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={mainContainerStyle}>
      <div style={titleContainerStyle}>PUBERTY ONSET PREDICTION SYSTEM</div>
      {/* <div>predicting puberty onset...</div> */}
      <div style={buttonContainerStyle}>
        <button onClick={onButtonClick} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Home;