import React from "react";
import Layout from "../../components/LayoutApp";
import Smiley from "../../assets/smile_icon.svg";
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
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="containerInformations"
          style={{
            height: "30%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "5rem",
              backgroundColor: "yellow",
            }}
          ></div>
          <h2>Lisa Tenever</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img src={Smiley} className="smileyProfile" alt="React logo" />
            <img src={Smiley} className="smileyProfile" alt="React logo" />
            <img src={Smiley} className="smileyProfile" alt="React logo" />
          </div>
        </div>
        <div
          className="containerEvents"
          style={{ height: "50%", width: "100%", paddingLeft: 2 }}
        >
          <h2 style={{ paddingLeft: "1rem" }}>
            {eventsData.length} événements
          </h2>
          <div className="listEvents" style={{ padding: "0.5rem", display:'flex',flexWrap:'wrap',justifyContent:'space-between' }}>
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="event"
                style={{
                  height: "fit-content",
                  padding: "0.5rem",
                  width: "150px",
                  backgroundColor: "blue",
                  borderRadius: "5%",
                }}
              >
                <div
                  className="info-cardEvent"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="imgEvent">
                    <img
                      src={event.imageUrl}
                      className="photoEvent"
                      alt="Event"
                      style={{
                        height: "80px",
                        width: "80px",
                        borderRadius: "2%",
                      }}
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
