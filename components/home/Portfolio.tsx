import { FC } from "react";

interface IPortfolioData {
  id: number;
  img: string;
  title: string;
  text: string;
}

const portfolioData: IPortfolioData[] = [
  {
    id: 0,
    img: "/images/portfolio/wmi.png",
    title: "Washing Machine Interface",
    text:
      "Development of an alternative UX and UI design for the finished product. The big difficulties were due to the ready architecture of the motherboard and software limitation. An alternative version is only a concept.",
  },
  {
    id: 1,
    img: "/images/portfolio/pups.png",
    title: "PupS",
    text:
      "Mobile application project for iPhones to control the electronic dog. The project was implemented in the process of learning at the SWPS University. This is only a concept, so all names and characters are fictitious.",
  },
  {
    id: 2,
    img: "/images/portfolio/sotg.png",
    title: "SignOnTheGo",
    text:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui fficia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    img: "/images/portfolio/ats.png",
    title: "AtTheSpot",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const PortfolioBlock: FC<IPortfolioData> = ({ img, title, text }) => (
  <div className="home-portfolio__item">
    <h2 className="home-portfolio__title text-dark">{title}</h2>
    <div className="home-portfolio__container">
      <img className="home-portfolio__img" src={img} alt={title} />
      <p className="home-portfolio__text text-dark">{text}</p>
    </div>
    <div className="home-portfolio__btn-container">
      <a href="/" className="home-portfolio__btn">
        <span className="home-portfolio__btn-text">Learn more</span>
        <span className="home-portfolio__btn-icon">&#8594;</span>
      </a>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="home home-portfolio">
    <div className="container">
      <h1 className="text-dark">Portfolio</h1>
      <div className="home-portfolio__block">
        {portfolioData.map((param) => (
          <PortfolioBlock {...param} key={param.id} />
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
