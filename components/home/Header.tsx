import { FC } from "react";

interface ISocialLink {
  id: number;
  url: string;
  className: string;
}

const socialLink: ISocialLink[] = [
  {
    id: 0,
    url: "https://github.com/dmitryakovlev",
    className: "github",
  },
  {
    id: 1,
    url: "https://www.linkedin.com/in/dmitryakovlev/",
    className: "linkedin",
  },
  {
    id: 2,
    url: "https://www.facebook.com/dmitr.yakovlev",
    className: "facebook",
  },
  {
    id: 3,
    url: "https://www.instagram.com/dmitr.yakovlev/",
    className: "instagram",
  },
];

const HeaderSocial: FC<ISocialLink> = ({ url, className }) => (
  <a
    href={url}
    className={`home-header__social-img ${className}`}
    target="_blank"
  ></a>
);

const Header = () => (
  <div className="home home-header">
    <div className="container">
      <h1 className="home-header__title">Hi, I’m Dmitriy Yakovlev</h1>
      <h2 className="home-header__subtitle">
        UX/UI designer and front-end developer
      </h2>
      <p className="home-header__text">
        Here you can see my portfolio works and read a little about me. You can
        also contact me with a proposal for cooperation. I'm pleased to take a
        part in interesting projects. Let's start!
      </p>
      <div className="home-header__social">
        {socialLink.map((param) => (
          <HeaderSocial {...param} key={param.id} />
        ))}
      </div>
      <a href="/pdf/CV0321.pdf" className="home-header__btn" target="_blank">
        Open my CV
      </a>
    </div>
    <a href="#skills" className="home-scroll">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
    </a>
  </div>
);

export default Header;
