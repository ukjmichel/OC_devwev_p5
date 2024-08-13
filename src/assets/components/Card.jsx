import "../styles/card-contener.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/location/${id}`);
  };

  return (
    <article onClick={handleClick}>
      <img src={cover} />
      <div>
        <h2>{title}</h2>
      </div>
    </article>
  );
};

export default Card;
