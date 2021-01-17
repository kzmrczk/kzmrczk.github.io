import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./ProjectCard.css";

export default function ProjectCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode project-card" : "project-card"}>
      <div class="project-image-div">
	<AwesomeSlider>
	<div data-src={cardInfo.image1} />
	<div data-src={cardInfo.image2} />
	<div data-src={cardInfo.image3} />
	</AwesomeSlider>
      </div>
      <div className="project-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.timeperiod}
        </p>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="project-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              class={isDark ? "dark-mode project-tag" : "project-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>

     </div>
  );
  
}
