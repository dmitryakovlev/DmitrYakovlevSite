import Skill from "./skill";

const Skills = () => (
  <div className="skills_background">
    <div className="container">
      <h1>My Skills</h1>
      <div className="skills_container">
        <Skill img="/images/skills/ui.svg" heading="Graphic editors" text="Work in Sketch, Framer X, Zeplin, Photoshop and Illustrator."/>
        <Skill img="/images/skills/frontend.svg" heading={"Frontend skills"} text={"Knowledge of HTML5, CSS3, JavaScript, C# and React."}/>
        <Skill img="/images/skills/ux.svg" heading={"User experience"} text={"Understanding users problems and finding solutions."}/>
      </div>
    </div>
  </div>
);

export default Skills