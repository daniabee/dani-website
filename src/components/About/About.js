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
          <h2>About me</h2>
          <h3>Location: Denver, CO</h3>
          <h3>Age: 25</h3>
        </div>
      </div>
    </div>
  );
};

//About me
// Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.

// Location:
// Victoria, BC
// Age:
// 29
// Nationality:
// Canadian / Irish
// Interests:
// Motorcycles, Muay Thai, Banjos
// Study:
// University of Victoria
// Employment:
// Instant Domains, inc.

export default About;
