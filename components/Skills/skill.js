const Skill = ({img, heading, text}) => (
  <div className="skill_container">
    <img className="skill_img" src={img} alt={heading}/>
    <h2>{heading}</h2>
    <p className="skill_text">{text}</p>
  </div>
);

export default Skill