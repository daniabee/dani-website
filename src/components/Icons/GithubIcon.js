import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import "../Icons/Icons.css";

const GithubIcon = () => {
  return (
    <div className="github">
      <a href="/github.com/daniabee">GithubIcon</a>
      <FaGithubSquare className="item" />
    </div>
  );
};

export default GithubIcon;
