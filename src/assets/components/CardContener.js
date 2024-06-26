import Card from "./Card";
import "../styles/contener.scss";
import Hero from "./Hero";

const CardContener = () => {
  return (
    <section id="contener">
      <Hero />
      <Card />
    </section>
  );
};
export default CardContener;
