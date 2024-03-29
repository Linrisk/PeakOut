import { Link } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';
import LogoP from "/logo_p.svg";
import './header.css';
import { IoMdSettings } from "react-icons/io";

interface HeaderProps {
  pageTitle: string;
}

const Header:React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="header" style={{ height: '5%' }}>

      <div className="header-text">
        <h1 style={{ fontSize: 25 }}>{pageTitle}</h1>
      </div>
      <div className="header-icon">
        <Link to="/settings">
          <IoMdSettings />
        </Link>
      </div>
    </header>
  );
};

export default Header;
