import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/HamburgerMenu.css";

const HamburgerMenu = ({ links }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hamburger-container" ref={menuRef}>
      <button
        className={`hamburger-icon ${open ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`hamburger-menu ${open ? "show" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            {link.url.startsWith("mailto:") ? (
              <a
                href={link.url}
                className="menu-link"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                to={link.url}
                end
                className={({ isActive }) =>
                  isActive ? "current menu-link" : "menu-link"
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
