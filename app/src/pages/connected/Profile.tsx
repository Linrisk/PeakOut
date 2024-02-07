import React from "react";
import Layout from "../../components/LayoutApp";
import { IoLocation } from "react-icons/io5";
import Smiley from "../../assets/smile_icon.svg";
import '../../assets/css/Global.css';
import "./Profile.css";
import PhotoE from "../../assets/images/use3.jpg";
import PhotoEv2 from "../../assets/images/use4.jpg";

const Profile = () => {
  const eventsData = [
    {
      name: "Event 1",
      organizer: "Paul V.",
      date: "2023-12-25",
      location: "Jardin Raymon VI",
      imageUrl: PhotoE,
    },
    {
      name: "Event 2",
      organizer: "Alice T.",
      date: "2023-12-31",
      location: "Parc Central",
      imageUrl: PhotoEv2,
    },
    {
      name: "Event 2",
      organizer: "Alice T.",
      date: "2023-12-31",
      location: "Parc Central",
      imageUrl: PhotoEv2,
    },
    {
      name: "Event 2",
      organizer: "Alice T.",
      date: "2023-12-31",
      location: "Parc Central",
      imageUrl: PhotoEv2,
    },
  ];

  return (
    <Layout>
      <div className="container-profile">
        <div className="containerInformations">
          <div className="photoProfile"></div>
          <h2 className="ProfilName">Lisa Tenever</h2>
          <div className="containerSmiley">
            {[...Array(3)].map((_, index) => (
              <img key={index} src={Smiley} className="smileyProfile" alt={`Smiley ${index}`} />
            ))}
          </div>
          <div className="containerInfosPlusProfile">
            <IoLocation id="icon-marker" />
            <p id="localisationUser">Toulouse, Haute Garonne</p>
          </div>
        </div>
        <div className="containerEvents">
          <h2 style={{ paddingLeft: "1rem", marginTop: '0.5rem'}}>
            {eventsData.length} événements
          </h2>
          <div
            className="message-list-reviews"
            style={{
              height: "100%", // Modifier cette ligne
              overflowY: "auto",
              padding: "0.5rem",
              display: "flex",
              maxHeight: "90vh", // Ajoutez cette ligne
              flexDirection: "column",
              justifyContent:"space-between",
              marginBottom:"50rem"
            }}
          >
            {eventsData.map((event, index) => (
              <div key={index} className="event">
                <div className="info-cardEvent">
                  <div className="imgEvent">
                    <img src={event.imageUrl} className="photoEvent" alt={`Event ${index}`} />
                  </div>
                  <div className="infoEvent">
                    <p id="infoName">{event.name}</p>
                    <p id="infoOrganizer">{event.organizer}</p>
                  </div>
                  <div className="infoLogisticEvent">
                    <p id="infoDate">{event.date}</p>
                    <p id="infoLocation">{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
