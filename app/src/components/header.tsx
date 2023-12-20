import { Link } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';
import LogoP from "/logo_p.svg";
import './header.css';
const Header = () => {
  return (
    <header className="header" style={{height:'5%'}}>
      <div className="header-logo">
      <img src={LogoP} className="logoP" alt="Vite logo" />
      </div>
      <div className="header-text">
        <h1 style={{fontSize:20}}>Titre de la Page</h1>
      </div>
      <div className="header-icon">
        <Link to="/chatView">
          <FaComments />
        </Link>
      </div>
    </header>
  );
};

export default Header;
