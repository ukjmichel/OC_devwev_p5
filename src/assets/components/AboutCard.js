import { useState } from "react";
import collapseBtn from "../images/arrow.svg";
import "../styles/about-card.scss";

const AboutCard = () => {
  const [isCardCollapse, setIsCardCollapse] = useState(false);
  const toggleButton = () => {
    setIsCardCollapse(!isCardCollapse);
  };
  return (
    <article className="about-card">
      <div className="about-card-header">
        <h2>Title</h2>
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
            ? "about-card-content content--colapse"
            : "about-card-content content--test"
        }
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          dolorum animi assumenda harum ex corrupti, officiis quod quis minus
          aut quae. Similique cum sapiente accusantium cupiditate quo illo
          beatae blanditiis?
        </p>
      </div>
    </article>
  );
};
export default AboutCard;
