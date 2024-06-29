import { CollapseCard, Layout } from "../components"
import "../styles/about-page.scss"
import banner from "../images/mountain.webp"
const AboutPage = () => {
  return (
    <Layout>
      <section id="about-page">
        <div className="about-banner">
          <img src={banner} alt="mountain view" />
        </div>
        <div className="about-content">
          <CollapseCard />
          <CollapseCard />
          <CollapseCard />
          <CollapseCard />
        </div>
      </section>
    </Layout>
  );
}
export default AboutPage;