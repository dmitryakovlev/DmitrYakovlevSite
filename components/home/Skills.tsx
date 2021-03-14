const skillData = [
  {
    id: 0,
    img: "/images/skills/ui.svg",
    heading: "Graphic editors",
    text: "Work in Sketch, Figma, FramerX, Zeplin, Photoshop and Illustrator.",
  },
  {
    id: 1,
    img: "/images/skills/frontend.svg",
    heading: "Frontend skills",
    text:
      "Knowledge of HTML, CSS (incl. SASS, TailwindCSS, Bootstrap), JavaScript (incl. jQuery), React (incl. NextJS), C# and Git.",
  },
  {
    id: 2,
    img: "/images/skills/ux.svg",
    heading: "User experience",
    text: "Understanding users problems and finding solutions.",
  },
];

const Skill = ({ img, heading, text }) => (
  <div className="skill_container">
    <img className="skill_img" src={img} alt={heading} />
    <h2>{heading}</h2>
    <p className="skill_text">{text}</p>
  </div>
);

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
