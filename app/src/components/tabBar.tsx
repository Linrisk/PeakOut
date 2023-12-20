import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';
import './tabBar.css';
const TabBar = () => {
  return (
    <div className="tab-bar">
      <Link to="/app" className="tab-item">
        <FaHome />
        <span>Accueil</span>
      </Link>
      <Link to="/profile" className="tab-item">
        <FaUser />
        <span>Profil</span>
      </Link>
      <Link to="/discover" className="tab-item">
        <FaBell />
        <span>Discover</span>
      </Link>
      <Link to="/chatView" className="tab-item">
        <FaCog />
        <span>Chat</span>
      </Link>
    </div>
  );
};

export default TabBar;
