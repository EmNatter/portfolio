import { NavLink, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu.jsx";

const Header = ({ links }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {location.pathname !== "/about" && (
        <img src="src/IMG/flower.jpeg" alt="sky" />
      )}
      <HamburgerMenu links={links} />
      <h1>Emilia Nätters Portfolio</h1>
      <h2 className="handwritten">
        UX/UI-designer med <br />
        Frontendkompetens
      </h2>
    </nav>
  );
};

export default Header;
