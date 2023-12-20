import React from "react";
import LogoP from "/logo_p.svg";
import { Link } from "react-router-dom";
const HomeView: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        display:'flex',
        flexDirection:'column'
      }}
    >
      <img src={LogoP} alt="Icône" className="icon" />

      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <button className="btn" style={{ margin: 5 }}>
          Se connecter
        </button>
        <Link to="/signIn">
     
          <button className="btn" style={{ margin: 5 }}>
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
