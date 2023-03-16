import "./Portfolio.css";

const Portfolio = ({ portfolio }) => {
  return (
    <div ref={portfolio} className="portfolio">
      <h3>Portfolio</h3>
    </div>
  );
};

export default Portfolio;
