const PortfolioBlock = ({ img, heading, text }) => (
  <div className="portfolio-block_container">
    <h2 className="portfolio-block_heading text-dark">{heading}</h2>
    <div className="portfolio-block_img-text">
      <img className="portfolio-block_img" src={img} alt={heading} />
      <p className="portfolio-block_text text-dark">{text}</p>
    </div>
    <a href="" className="portfolio-block_btn">
      Learn more
    </a>
  </div>
);

export default PortfolioBlock;
