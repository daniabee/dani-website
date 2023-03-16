import "./Hero.css";
import GithubIcon from "../Icons/GithubIcon";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="title">
          <h1 className="welcome">HI THERE,</h1>
          <h1 className="greeting">I'M DANI BAGLEY.</h1>
        </div>
      </div>
      <GithubIcon />
    </div>
  );
};

export default Hero;
