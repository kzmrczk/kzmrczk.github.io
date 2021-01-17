import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

var h = 60;

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <img src={skills.img_path} width={h*skills.img_aspect} height={h}></img>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

//<i className={skills.fontAwesomeClassname}></i>