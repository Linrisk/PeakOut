import React, { useState } from "react";
import "./Add.css"; // Style CSS pour ce composant
import Layout from "../../components/LayoutApp";

import { LuPartyPopper } from "react-icons/lu";
import "../../assets/css/Chat.css";
import { Link } from "react-router-dom";
const AddEvent = () => {
  const [nom, setNom] = useState("");
  const [Localisation, setLocalisation] = useState("");
  const [Date, setDate] = useState("");
  const [Description, setDescription] = useState("");
  return (
    <Layout>
      <div
        className="add-view"
        style={{
          height: "100vh",
          width: "100%",
          paddingTop: "8%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LuPartyPopper style={{ fontSize: 30 }} />
        <h1 id="add-title">Ajouter un évenement?</h1>
        <div
          id="form-add-event"
          style={{ width: "100%", height: "80%" }}
        >
          <form className="login-form">
            <br />
            <input
              type="text"
              placeholder="Nom"
              id="nom"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Localisation"
              id="Localisation"
              name="Localisation"
              value={Localisation}
              onChange={(e) => setLocalisation(e.target.value)}
              required
            />

            <input
            style={{width:'100%',paddingTop:'3rem;',paddingBottom:'1rem',marginBottom:'1rem'}}
              type="date"
              placeholder="Date"
              id="Date"
              name="Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Description"
              id="Description"
              name="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

           
            <div className="button-container-login">
             
              <Link to="/search">
                <button type="submit" className="type2">
                  Soumettre
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default AddEvent;
