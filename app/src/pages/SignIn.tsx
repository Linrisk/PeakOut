import React, { useState } from "react";
import "./signIn.css";
import LogoP from "/logo_p.svg";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const RegisterPage: React.FC = () => {
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
    <div className="register-container">
      <div className="row-back" onClick={() => navigate(-1)}>
      <FaArrowLeft />
      </div>
      <h1 className="h1-register">S'inscrire</h1>
      <img src={LogoP} className="logoP" alt="Vite logo" />

      <form className="inscription-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Pseudo:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse Mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
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

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;
