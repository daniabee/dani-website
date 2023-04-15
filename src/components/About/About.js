import "./About.css";
import image1 from "../assets/img.JPG";
import image2 from "../assets/img2.JPG";

const About = ({ about }) => {
  return (
    <div ref={about} className="aboutPage">
      <div className="about">
        <div className="images">
          <img className="img1" src={image1} />
          <img className="img2" src={image2} />
        </div>
        <div className="bio">
          <h2 className="bioTitle">ENGINEER</h2>
          <h2 className="bioTitle">DESIGNER</h2>
          <h2 className="bioTitle">ARTIST</h2>
          <p className="paragraph">
            Hi, I'm Dani, a Full Stack Software Engineer and artist based in
            Denver, CO. I create engaging digital experiences by combining my
            passion for creativity and design with my expertise in software
            development. I love pushing the boundaries of what's possible and
            incorporating my artistic background into my work. When I'm not
            working, you can find me exploring the Colorado outdoors, trying new
            restaurants, practicing yoga, and discussing the latest movies.
            Check out my portfolio and let's collaborate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
