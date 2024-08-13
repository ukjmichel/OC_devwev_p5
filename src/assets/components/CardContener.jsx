import "../styles/card-contener.scss";
import Card from "./Card";

const CardContener = ({ data }) => {
  return (
    <div id="card-contener">
      {data.map(({ id, title, cover }) => (
        <Card key={id} id={id} title={title} cover={cover} />
      ))}
    </div>
  );
};
export default CardContener;
