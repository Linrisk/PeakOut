import React, { useState } from "react";
import '../assets/css/Login.css';
import PeakOutLogo from '../assets/RedPeakOut.png';
import '../assets/css/Global.css';

import { Link } from 'react-router-dom';
const Login = () => {
    const [nom, setNom] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login-container">
            <form className="login-form">
                <h1>Se connecter</h1>
                <img
                    src={PeakOutLogo}
                    className="PeakOutLogo"
                    alt="Logo"
                    style={{ width: '300px', height: 'auto' }}
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
                    type="text"
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
                    <label htmlFor="email">Rester connecté</label>
                </div>
                <br />
                <Link to={`/chat?nom=${nom}`}>Mot de passe oublié ?</Link>
                <br />
                <Link to="/app"><button type="submit" className="type1">Se connecter</button></Link>
                <label htmlFor="email">Pas encore de compte ?</label>
                <Link to="/signIn"><button type="submit" className="type2">S'inscrire</button></Link>
            </form>
        </div >
    );
};

export default Login;