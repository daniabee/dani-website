import "./NavBar.css";

const NavBar = ({ about, resume, portfolio, contact }) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ul className="navBar">
        <li onClick={() => scrollToSection(about)} className="link">
          ABOUT
        </li>
        <li onClick={() => scrollToSection(resume)} className="link">
          RESUME
        </li>
        <li onClick={() => scrollToSection(portfolio)} className="link">
          PORTFOLIO
        </li>
        <li onClick={() => scrollToSection(contact)} className="link">
          CONTACT
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
