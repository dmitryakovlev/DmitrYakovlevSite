import PortfolioBlock from "./portfolio-block";

const portfolioData = [
  {
    id: 0,
    img: "./images/portfolio/WashingMachine.png",
    heading: "Washing Machine",
    text:
      "Development of an alternative UX and UI design for the finished product. The big difficulties were due to the ready architecture of the motherboard and software limitation. An alternative version is only a concept.",
  },
  {
    id: 1,
    img: "./images/portfolio/Pups.png",
    heading: "PupS",
    text:
      "Mobile application project for iPhones to control the electronic dog. The project was implemented in the process of learning at the SWPS University. This is only a concept, so all names and characters are fictitious.",
  },
  {
    id: 2,
    img: "./images/portfolio/SignOnTheGo.png",
    heading: "SignOnTheGo",
    text:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui fficia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    img: "./images/portfolio/AtTheSpot.png",
    heading: "AtTheSpot",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const Portfolio = () => (
  <div className="portfolio_background">
    <div className="container">
      <h1 className="text-dark">Portfolio</h1>
      <div className="portfolio_blocks">
        {portfolioData.map((portfolio) => (
          <PortfolioBlock
            img={portfolio.img}
            heading={portfolio.heading}
            text={portfolio.text}
            key={portfolio.id}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
