import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import './tabBar.css';
import { FaUserCircle } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { LuPartyPopper } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
const TabBar = () => {
  return (
    <div className="tab-bar" style={{height:'7%',borderRadius:'1rem 1rem 0rem 0rem'}}>
      <Link to="/app" className="tab-item">
        <FaHome style={{fontSize:35}} />
      </Link>
      <Link to="/search" className="tab-item">
      <IoMdAdd style={{fontSize:35}} />
      </Link>
      <Link to="/discover" className="tab-item" style={{height:'60px',width:'60px',backgroundColor:'purple',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:20}}>
      <LuPartyPopper style={{fontSize:25, color:'white'}} />
      </Link>
      <Link to="/chatView" className="tab-item">
      <IoChatbox style={{fontSize:35}} />
      </Link>
      <Link to="/profile" className="tab-item">
        <FaUserCircle  style={{fontSize:35  }}/>
      </Link>
    </div>
  );
};

export default TabBar;
