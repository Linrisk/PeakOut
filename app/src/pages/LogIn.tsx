import React, { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios"; // Importez AxiosError
import '../assets/css/Login.css';
import PeakOutLogo from '../../src/assets/images/logo_p.svg';
import '../assets/css/Global.css';


//import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
    //const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const userData = {
          username: nom,
          password: password
        };
    
        try {
          const response = await axios.post("http://localhost:3000/api/connectUser", userData);
          console.log(response.data);
          //setSuccessMessage("Connexion réussie !");
          //navigate("/app");
        } catch (error: AxiosError | any) { // Spécifiez AxiosError ou any
          if (error.response) {
            // Erreur de réponse HTTP, le serveur a répondu avec un code d'erreur
            setErrorMessage("Une erreur sur la réponse HTTP s'est produite lors de la connexion. Veuillez réessayer.");
            console.error("Error:", error.response.data);
          } else if (error.request) {
            // Erreur de requête HTTP, pas de réponse du serveur
            setErrorMessage("Pas de réponse du serveur . Veuillez réessayer.");
            console.error("No response received:", error.request);
          } else {
            // Autres erreurs, par exemple, une erreur dans le code JavaScript
            setErrorMessage("Une autre erreur s'est produite lors de la connexion. Veuillez réessayer.");
            console.error("Error:", error.message);
          }
        }
    };

    return (
        <div className="login-container">
           <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="title-login">Se connecter</h1>
                <img
                    src={PeakOutLogo}
                    className="PeakOutLogo"
                    alt="Logo"
                />
                <br />
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    id="nom"
                    name="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="RememberMe">
                    <input
                        type="checkbox"
                        id="remember-me"
                        name="remember-me"
                    />
                    <label htmlFor="remember-me" className="label-stay-connected">Rester connecté</label>
                </div>
                <br />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {/*{successMessage && <p className="success-message">{successMessage}</p>}*/}
                <Link to="/forgotpassword" className="label-forget-password">Mot de passe oublié ?</Link>
                <br />
                <div className="button-container-login">
                    <button type="submit" className="type1">Se connecter</button>
                    <label htmlFor="signup-link">Pas encore de compte ?</label>
                    <Link id="signup-link" to="/signIn">S'inscrire</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;