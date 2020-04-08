import Skill from "./skill";

const skillData = [
  {
    id: 0,
    img: "/images/skills/ui.svg",
    heading: "Graphic editors",
    text: "Work in Sketch, Framer X, Zeplin, Photoshop and Illustrator.",
  },
  {
    id: 1,
    img: "/images/skills/frontend.svg",
    heading: "Frontend skills",
    text: "Knowledge of HTML5, CSS3, JavaScript, C# and React.",
  },
  {
    id: 2,
    img: "/images/skills/ux.svg",
    heading: "User experience",
    text: "Understanding users problems and finding solutions.",
  },
];

const Skills = () => (
  <div className="skills_background">
    <div className="container">
      <h1>My Skills</h1>
      <div className="skills_container">
        {skillData.map((skill) => (
          <Skill
            img={skill.img}
            heading={skill.heading}
            text={skill.text}
            key={skill.id}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
