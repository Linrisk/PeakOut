import React, { useState } from "react";
import '../assets/css/Login.css';
import PeakOutLogo from '../../src/assets/images/logo_p.svg';
import '../assets/css/Global.css';

import { Link } from 'react-router-dom';
const Login = () => {
    const [nom, setNom] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login-container">
            <form className="login-form">
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
                    <label htmlFor="email" className="label-stay-connected">Rester connecté</label>
                </div>
                <br />
                <Link to="/forgotpassword" className="label-forget-password">Mot de passe oublié ?</Link>
                <br />
                <div className="button-container-login">
                <Link to="/app"><button type="submit" className="type1">Se connecter</button></Link>
                <label htmlFor="email">Pas encore de compte ?</label>
                <Link to="/signIn"><button type="submit" className="type2">S'inscrire</button></Link>
                </div>
                
            </form>
        </div >
    );
};

export default Login;