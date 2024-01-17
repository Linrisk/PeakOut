import React from "react";
import Layout from "../../components/LayoutApp";
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
  ];

  return (
    <Layout>
      <div
        className="container-profile"

      >
        <div
          className="containerInformations"

        >
          <div className="photoProfile"

          ></div>
          <h2 className="ProfilName">Lisa Tenever</h2>
          <div className="containerSmiley"

          >
            <img src={Smiley} className="smileyProfile" alt="React logo" />
            <img src={Smiley} className="smileyProfile" alt="React logo" />
            <img src={Smiley} className="smileyProfile" alt="React logo" />
          </div>
        </div>
        <div
          className="containerEvents"
        >
          <h2 style={{ paddingLeft: "1rem" }}>
            {eventsData.length} événements
          </h2>
          <div className="listEvents">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="event"

              >
                <div
                  className="info-cardEvent"

                >
                  <div className="imgEvent">
                    <img
                      src={event.imageUrl}
                      className="photoEvent"
                    />
                  </div>
                  <div className="infoEvent">
                    <p>{event.name}</p>
                    <p>{event.organizer}</p>
                  </div>
                  <div className="infoLogisticEvent">
                    <p>{event.date}</p>
                    <p>{event.location}</p>
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
