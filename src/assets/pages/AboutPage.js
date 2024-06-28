import { Layout } from "../components"
import AboutCard from "../components/AboutCard"
import "../styles/about-page.scss"
import banner from "../images/mountain.webp"

const AboutPage = () => {
  return (
    <Layout>
      <section id="about-page">
        <div className="about-banner">
          <img src={banner} alt="mountain view"/>
        </div>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>

      </section>

    </Layout>
  )
}
export default AboutPage;