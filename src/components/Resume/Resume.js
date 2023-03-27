import "./Resume.css";

const Resume = ({ resume }) => {
  return (
    <div ref={resume} className="resume">
      <div className="infoContainer">
        <div className="experience">
          <h2 className="heading">Education</h2>
          <div className="education">
            <div>
              <h3>Turing School of Software Design and Development</h3>
              <p>
                Certificate of Completion for Front End Development - March 2023
              </p>
            </div>
            <div>
              <h3>Brigham Young University</h3>
              <p>BS Psychology - May 2020</p>
            </div>
            <div>
              <h3>Brigham Young University - Hawaii</h3>
              <p>Associates- May 2020</p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h2 className="heading">Work</h2>
        </div>
        <div className="experience">
          <h2 className="heading">Skills</h2>
        </div>
      </div>
    </div>
  );
};

export default Resume;
