import Skill from "./skill";
import ui from "../../public/images/skills/frontend.png"

const Skills = () => (
  <div className="skills_background">
    <div className="container">
      <h1>My Skills</h1>
      <div className="skills_container">
        <Skill heading={"Graphic editors"} text={"Work in Sketch, Framer X, Zeplin, Photoshop and Illustrator."}/>
        <Skill heading={"Frontend skills"} text={"Knowledge of HTML5, CSS3, JavaScript, C# and React."}/>
        <Skill heading={"User experience"} text={"Understanding users problems and finding solutions."}/>
      </div>
    </div>
  </div>
);

export default Skills