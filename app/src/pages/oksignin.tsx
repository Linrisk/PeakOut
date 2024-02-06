import React, { useState } from "react";
import "../assets/css/Login.css";
import PeakOutLogo from "../assets/logo_p.svg";
import "../assets/css/Global.css";

import { Link } from "react-router-dom";
const SignIn = () => {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");

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
        <h1>Se connecter</h1>
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
          onChange={(e) => setNom(e.target.value)}
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
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input type="email" id="email" name="email" required />
        <input type="tel" id="phone" name="phone" required />
        <div className="form-group">
          <div
            className="password-group"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="password"
              required
            />
            <div className="icon-eye  " onClick={toggleShowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmation Mot de passe</label>
          <div
            className="password-group"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <div className="icon-eye  " onClick={toggleShowConfirmPassword}>
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        
        <label htmlFor="email">Pas encore de compte ?</label>
        <Link to={`/chat?nom=${nom}`}>
          <button type="submit" className="type2">
            S'inscrire
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
