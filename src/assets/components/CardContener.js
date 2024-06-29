import "../styles/card-contener.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ locationTitle = "Titre de la location" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/location");
  };

  return (
    <article onClick={handleClick}>
      <div>
        <h2>{locationTitle}</h2>
      </div>
    </article>
  );
};

const CardContener = () => {
  return (
    <div id="card-contener">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default CardContener;
