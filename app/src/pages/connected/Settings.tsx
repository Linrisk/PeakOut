import React from "react";
import Layout from "../../components/LayoutApp";
import "./Settings.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
const Settings = () => {
    let navigate = useNavigate();
    const goBack = () => {
		navigate(-1);
	}
  return (

    <div className="container-fluid container-settings">
      <div className="col-lg-12">
      <div className="row contain-back-icon">
          <IoMdArrowBack onClick={goBack} className="icon-back"/>
        </div>
        <div className="row contain-name">
          <h1 className="title-name">Lisa Tivener</h1>
        </div>
        <div className="row row-contain-photo">
          <div className="container-photo"></div>
        </div>
        <div className="row row-contain-indicator">
          <div className="pourcents-indicator-contain"> <div className="pourcents-indicator"></div></div>
        </div>
        <div className="row row-contain-informations-profile">
          <p>
            Plus que 4 réservations à faire sur Peak Out pour profiter d’une
            remise de 10% sur votre prochaine réservation
          </p>
        </div>
        <hr/>
        <div className="row row-contain-settings">
          <button placeholder="profile" className="button-settings">
            <p>Profile</p>
          </button>

          <button placeholder="Gerer mes events" className="button-settings">
            <p>Gérér mes évents</p>
          </button>

          <button placeholder="informations" className="button-settings">
            <p>Mes informations</p>
          </button>

          <button placeholder="helpcenter" className="button-settings">
            <p>Centre d'aide</p>
          </button>

          <button placeholder="disconnect" className="button-settings">
            <p>Se deconnecter</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
