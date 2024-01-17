import React from "react";
import LogoP from "/logo_p.svg";
import { Link } from "react-router-dom";
import '../assets/css/Global.css';

const HomeView: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={LogoP} alt="Icône" className="PeakOutLogo" />

      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Link to="/login">
          <button className="type2" style={{ margin: 5 }}>
            Se connecter
          </button>
        </Link>
        <Link to="/signIn">
          <button className="type1" style={{ margin: 5 }}>
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
