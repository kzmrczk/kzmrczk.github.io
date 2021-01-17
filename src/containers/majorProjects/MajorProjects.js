import React, { useContext } from "react";
import "./MajorProjects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { majorProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function MajorProjects() {
  const { isDark } = useContext(StyleContext);
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="majorprojects">
        <div className="achievement-main-div">
          <div className="project-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading project-heading"
                  : "heading project-heading"
              }
            >
              {majorProjects.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {majorProjects.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {majorProjects.projectsCards.map((card) => {
              return (
                <ProjectCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
		    timeperiod: card.timeperiod,
                    image1: card.image1,
                    image2: card.image2,
		    image3: card.image3,
                    footer: card.footerLink,
                  }}
                />
              );
            })}
          </div>
		<Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </div>
    </Fade>
  );
}
