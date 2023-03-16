import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ about, resume, portfolio, contact }) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="navBar">
      <NavLink
        to="/#about"
        onClick={() => scrollToSection(about)}
        className="link"
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/#resume"
        onClick={() => scrollToSection(resume)}
        className="link"
      >
        RESUME
      </NavLink>
      <NavLink
        to="/#portfolio"
        onClick={() => scrollToSection(portfolio)}
        className="link"
      >
        PORTFOLIO
      </NavLink>
      <NavLink
        to="/#contact"
        onClick={() => scrollToSection(contact)}
        className="link"
      >
        CONTACT
      </NavLink>
    </div>
  );
};

export default NavBar;
