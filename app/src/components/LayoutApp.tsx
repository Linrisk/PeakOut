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
      <div className="app">
        <Header />
        <main>
          {children} {/* Affiche le contenu de la route parente */}
        </main>
        <NavBar />
      </div>
    );
  };
  
  export default Layout;