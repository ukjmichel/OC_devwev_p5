
import "../styles/card-contener.scss"


const Card = ({locationTitle = "Titre de la location"}) => {
  
  
  return (
    <article>
      <div>
        <h2>{locationTitle}</h2>
      </div>
    </article>
  );
}
export default Card


