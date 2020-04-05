const Skill = ({img, heading, text}) => (
  <div className="skill_container">
    <img src={img}/>
    <h2>{heading}</h2>
    <p>{text}</p>
  </div>
);

export default Skill