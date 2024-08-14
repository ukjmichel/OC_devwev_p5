import { useState } from "react";
import collapseBtn from "../images/arrow.svg";
import "../styles/collapse-card.scss";

const CollapseCard = ({ content, title = "title" }) => {
  const [isCardCollapse, setIsCardCollapse] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const toggleButton = () => {
    setIsCardCollapse(!isCardCollapse);
    setIsInit(false);
  };
  return (
    <article className="about-card">
      <div className="about-card-header">
        <h2>{title}</h2>
        <img
          src={collapseBtn}
          alt="collapse btn"
          className={
            isCardCollapse ? "about-card-btn--colapse" : "about-card-btn"
          }
          onClick={toggleButton}
        />
      </div>
      <div
        className={
          isCardCollapse
            ? "about-card-content content--open"
            : isInit
            ? "about-card-content content"
            : "about-card-content content--close"
        }
      >
        <div className="card-text">{content}</div>
      </div>
    </article>
  );
};
export default CollapseCard;
