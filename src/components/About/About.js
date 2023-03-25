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
          <h2 className="bioTitle">SOFTWARE ENGINEER</h2>
          <h2 className="bioTitle">GRAPHIC DESIGNER</h2>
          <h2 className="bioTitle">ARTIST</h2>
          <p className="paragraph">
            Hi there, I'm Dani! I'm a Full Stack Software Engineer and artist
            based in Denver, CO. With a passion for creativity and design, I
            specialize in crafting digital experiences that engage users and
            deliver results. From a young age, I've been fascinated by the world
            of art and design. As I pursued my career in software development, I
            found ways to incorporate my artistic background into my work, and
            I'm always looking for new ways to push the boundaries of what's
            possible. In my free time, I enjoy exploring the beautiful Colorado
            outdoors, trying new restaurants, and practicing yoga to keep my
            mind and body in balance. As an avid movie buff, I love discussing
            the latest hits and exploring new stories. Whether you're looking
            for a Full Stack Software Engineer or an artist, I'm always on the
            lookout for new opportunities and collaborations. Please feel free
            to browse my portfolio and get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
