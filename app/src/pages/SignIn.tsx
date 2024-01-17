import React, { useState } from "react";
import "../assets/css/Login.css";
import PeakOutLogo from "../../src/assets/images/logo_p.svg";
import "../assets/css/Global.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import axios from "axios";

const SignIn = () => {
  function affichageUser() {
    console.log("username" + pseudo);
    console.log("firstname" + prenom);
    console.log("lastname" + nom);
    console.log("email" + mail);
    console.log("phone" + phone);
  }
  

  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");

  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    let result = await submitForm(event.target);
    if (result.error) {
      setError(result.error);
    } else {
      navigate("/");
    }
  }

  async function createUser() {
    const userData = {
      userName: pseudo,
      firstName: prenom,
      lastName: nom,
      email: mail,
      phone: phone,
    };

    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container" style={{ height: "100%" }}>
      <form className="login-form" onSubmit={createUser}>
        <img
          src={PeakOutLogo}
          className="PeakOutLogo"
          alt="Logo"
        />
        <h2>S'inscrire</h2>
        <br />
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          id="pseudo"
          name="pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          required
        />
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
          placeholder="Prenom"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="mail"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          style={{ width: "100%", height: "2rem" }}
        />
        <input
          type="tel"
          id="phone"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ width: "100%", height: "2rem", marginTop: "1rem" }}
        />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="confirmPassword"
          required
          style={{ width: "100%", height: "2rem", marginTop: "1rem" }}
        />

        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirmPassword"
          required
          style={{ width: "100%", height: "2rem", marginTop: "1rem" }}
        />

        <div
          style={{
            width: "100%",
            height: "30%",
            marginTop: "3%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/login">
            <label htmlFor="email">Déjà un compte ?</label>
          </Link>

          <button type="submit"  className="type2">
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
