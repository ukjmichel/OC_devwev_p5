import "../styles/card-contener.scss";
import { useNavigate } from "react-router-dom";

const Card = ({id,title}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/location/${id}`);
  };

  return (
    <article onClick={handleClick}>
      <div>
        <h2>{title}</h2>
      </div>
    </article>
  );
};

const CardContener = ({data}) => {
 
  return (
    <div id="card-contener">
      {data.map(({id,title})=><Card key={id} id={id} title={title}/>)}
    </div>
  );
};
export default CardContener;
