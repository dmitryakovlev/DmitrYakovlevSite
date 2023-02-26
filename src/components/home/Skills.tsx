import { FC } from "react";

interface ISkillData {
  id: number;
  img: string;
  title: string;
  text: string;
}

const skillData: ISkillData[] = [
  {
    id: 0,
    img: "/images/skills/ui.svg",
    title: "Graphic editors",
    text: "Work in Sketch, Figma, FramerX, Zeplin, Photoshop and Illustrator.",
  },
  {
    id: 1,
    img: "/images/skills/frontend.svg",
    title: "Frontend skills",
    text:
      "Knowledge of HTML, CSS (incl. SASS, TailwindCSS, Bootstrap), JavaScript (incl. jQuery), React (incl. NextJS), C# and Git.",
  },
  {
    id: 2,
    img: "/images/skills/ux.svg",
    title: "User experience",
    text: "Understanding users problems and finding solutions.",
  },
];

const Skill: FC<ISkillData> = ({ img, title, text }) => (
  <div className="home-skills__item">
    {/* <img className="home-skills__img" src={img} alt={title} /> */}
    <h2>{title}</h2>
    <p className="home-skills__text">{text}</p>
  </div>
);

const Skills = () => (
  <div className="home home-skills" id="skills">
    <div className="container">
      <h1>My Skills</h1>
      <div className="home-skills__block">
        {skillData.map((param) => (
          <Skill {...param} key={param.id} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
