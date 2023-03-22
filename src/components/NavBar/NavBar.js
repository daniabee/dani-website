import "./NavBar.css";
import { NavLink } from "react-router-dom";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";

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
      <div className="socials">
        <a href={"https://github.com/daniabee"}>
          <GithubIcon />
        </a>
        <a href={"https://www.linkedin.com/in/dani-bagley-798463116/"}>
          <LinkedInIcon />
        </a>
        <a href={"https://www.instagram.com/dani_bagelz/?hl=en"}>
          <InstagramIcon />
        </a>
        <a href={"https://www.facebook.com/daniabee/"}>
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
