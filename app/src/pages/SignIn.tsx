import React, { useState } from "react";
import "../assets/css/Login.css";
import PeakOutLogo from "../../src/assets/images/logo_p.svg";
import "../assets/css/Global.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    const userData = {
      userName: pseudo,
      firstName: prenom,
      lastName: nom,
      email: mail,
      phone: phone,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:3000/api/createUser", userData);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      setError("Une erreur s'est produite lors de la création de l'utilisateur");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container" style={{ height: "100%" }}>
      <form className="login-form" onSubmit={handleSubmit}>
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
          //type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", height: "2rem", marginTop: "1rem" }}
        />

        <input
          //type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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

          <button type="submit" className="type2">
            S'inscrire
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
