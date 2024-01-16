import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabBar from "../components/tabBar";
import Header from "../components/header";

const NavBar = () => {
  return (
    <nav>
      <TabBar />
    </nav>
  );
};

const Layout = ({ children }) => {
    return (
      <div className="app" style={{height:'100%', width:'100%'}}>
        <Header style={{height:'5%'}} />
        <main style={{height:'80%'}} >
          {children} {/* Affiche le contenu de la route parente */}
        </main>
        <NavBar style={{height:'17%'}}  />
      </div>
    );
  };
  
  export default Layout;