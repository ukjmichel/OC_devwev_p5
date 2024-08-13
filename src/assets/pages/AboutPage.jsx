import { CollapseCard, Layout } from "../components";
import "../styles/about-page.scss";
import banner from "../images/mountain.webp";

const aboutContent = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logement ettoutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait parties des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de prtubation du voisinage entrainera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "La bienveillance fait parties des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de prtubation du voisinage entrainera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note qussi bien à l'hôte qu'au locataire, dela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <section id="about-page">
        <div className="about-banner">
          <img src={banner} alt="mountain view" />
        </div>
        <div className="about-content">
          {aboutContent.map(({ content, title }, index) => (
            <CollapseCard key={index} title={title} content={content} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default AboutPage;
