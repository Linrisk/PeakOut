import React from "react";
import Layout from "../../components/LayoutApp";
import "./HomeView.css";
import Smiley from "../../assets/smile_icon.svg";

import PhotoE from "../../assets/images/use3.jpg";
import PhotoEv2 from "../../assets/images/use4.jpg";

const HomePage = () => {
  const recommandationsData = [
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

  const reviewsData = [
    {
      name: "Event 1",
      url: PhotoE,
      message: "2023-12-25",
      nbSourire: "Jardin Raymon VI",
    },
    {
      name: "Event 1",
      url: PhotoE,
      message: "2023-12-25",
      nbSourire: "Jardin Raymon VI",
    },
    {
      name: "Event 1",
      url: PhotoE,
      message: "2023-12-25",
      nbSourire: "Jardin Raymon VI",
    },
    {
      name: "Event 1",
      url: PhotoE,
      message: "2023-12-25",
      nbSourire: "Jardin Raymon VI",
    },
  ];

  return (
    <Layout>
      <div id="container-homeview">
        <div id="layout-homeview">
          <h1 id="name-homeview">Nos recommandations</h1>
          <div className="row-last-recommandation">
            <div className="scrollable-recommandations">
              {recommandationsData.map((event, index) => (
                <div key={index} className="recommandation-container">
                  <div className="img-recommandation">
                    <img
                      src={event.imageUrl}
                      className="photoEvent"
                      alt={`Event ${index}`}
                    />
                  </div>
                  <div className="infos-recommandations">
                    <h2 className="title-recommandation">{event.name}</h2>
                    <h3 className="cat-recommandation">Photo</h3>
                    <h3 className="location-recommandation">
                      {event.location} | Toulouse
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1 id="name-about-us">Vous parlez de nous</h1>

          <div
            className="message-list-reviews"
            style={{
              height: "100%", // Modifier cette ligne
              overflowY: "auto",
              padding: "0.5rem",
              display: "flex",
              maxHeight: "60vh", // Ajoutez cette ligne
              flexDirection: "column",
              marginBottom:"50rem"
            }}
          >
            {reviewsData.map((user, index) => (
              <div key={index} className="review-container">
                <div className="row-infos-review">
                  <div className="img-review">
                    <div className="photoReview"></div>
                  </div>
                  <h2 id="name_review">name</h2>
                  <div className="review-sourire">
                    {[...Array(3)].map((_, index) => (
                      <img
                        key={index}
                        src={Smiley}
                        className="smileyProfile"
                        alt={`Smiley ${index}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="row-msg-review">
                  <p>
                    “Cela fait maintenant 6 mois que j’utilise l’application et
                    je ne suis jamais déçu. J’ai pu élargir mes connaissan ces
                    musicales et artistiques grâce à des personnes rencontrées
                    sur l’appli et qui sont devenues mes amis !”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
