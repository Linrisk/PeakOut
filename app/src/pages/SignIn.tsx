import React, { useState } from "react";
import "../assets/css/Login.css";
import PeakOutLogo from "../assets/RedPeakOut.png";
import "../assets/css/Global.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const SignIn = () => {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");

  const [prenom, setPrenom] = useState("");

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

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>S'inscrire</h2>
        <img
          src={PeakOutLogo}
          className="PeakOutLogo"
          alt="Logo"
          style={{ width: "300px", height: "auto" }}
        />
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
          onChange={(e) => setPseudo(e.target.value)}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="mail"
          required
          style={{ width: "100%", height: "2rem" }}
        />
        <input
          type="tel"
          id="phone"
          placeholder="phone"
          name="phone"
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
            marginTop: "2rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
             <Link to="/login"><label htmlFor="email">Déjà un compte ?</label></Link>
          <Link to="/app">
            <button type="submit" className="type2">
              S'inscrire
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
