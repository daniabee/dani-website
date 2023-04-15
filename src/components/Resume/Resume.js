import "./Resume.css";

const Resume = ({ resume }) => {
  return (
    <div ref={resume} className="resume">
      <div className="infoContainer">
        <div className="experience">
          <h2 className="heading">Education</h2>
          <div className="items">
            <div className="resumeItem">
              <h3 className="exHeading">
                Turing School of Software Design and Development
              </h3>
              <p className="description">
                Certificate of Completion for Front End Development{" "}
                <span> • </span> March 2023
              </p>
            </div>
            <div className="resumeItem">
              <h3 className="exHeading">Brigham Young University</h3>
              <p className="description">
                BS Psychology <span> • </span> May 2020
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h2 className="heading">Work</h2>
          <div className="items">
            <div className="resumeItem">
              <h3 className="exHeading">Consultant</h3>
              <p className="description">
                Booz Allen Hamilton <span>•</span> March 2023 - Present
              </p>
            </div>
            <div className="resumeItem">
              <h3 className="exHeading">Marketing Assistant</h3>
              <p className="description">
                Bagley Law Firm <span>•</span> July 2021 - March 2022
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h2 className="heading">Skills</h2>
          <div className="tables">
            <div className="section-wrapper clearfix">
              <p>LANGUAGES/FRAMEWORKS</p>
              <ul style={{ liststyle: "none" }}>
                <li className="skill-percentage">HTML / HTML5</li>
                <li className="skill-percentage">CSS / SASS</li>
                <li className="skill-percentage">JavaScript</li>
                <li className="skill-percentage">Express</li>
                <li className="skill-percentage">React</li>
                <li className="skill-percentage">React Router</li>
                <li className="skill-percentage">React Context API</li>
                <li className="skill-percentage">Apollo GraphQL</li>
              </ul>
            </div>
            <div className="section-wrapper clearfix">
              <p>TESTING</p>
              <ul style={{ liststyle: "none" }}>
                <li className="skill-percentage">End to End testing</li>
                <li className="skill-percentage">Unit Testing</li>
                <li className="skill-percentage">Test Driven Development</li>
                <li className="skill-percentage">Cypress</li>
                <li className="skill-percentage">Mocha Chai</li>
              </ul>
            </div>
            <div className="section-wrapper clearfix">
              <p>TOOLS/WORKFLOW</p>
              <ul style={{ liststyle: "none" }}>
                <li className="skill-percentage">Git</li>
                <li className="skill-percentage">GitHub</li>
                <li className="skill-percentage">CircleCI</li>
                <li className="skill-percentage">NPM</li>
                <li className="skill-percentage">Heroku</li>
                <li className="skill-percentage">Vercel</li>
                <li className="skill-percentage">Restful APIs</li>
                <li className="skill-percentage">Postman</li>
              </ul>
            </div>
            <div className="section-wrapper clearfix">
              <p>SPOKEN LANGUAGES</p>
              <ul style={{ liststyle: "none" }}>
                <li className="skill-percentage">English</li>
                <li className="skill-percentage">Spanish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// LANGUAGES/FRAMEWORKS:
// 	JavaScript | CSS | HTML | React | React Router | React Context API | Express | Apollo GraphQL
// TESTING:
// 	End to End testing | Unit Testing | Test Driven Development | Cypress | Mocha Chai
// TOOLS/WORKFLOW:
// 	Git | GitHub | CircleC | NPM | Heroku | Vercel | Restful APIs | Postman
// SPOKEN LANGUAGES:
// 	English | Spanish

export default Resume;
