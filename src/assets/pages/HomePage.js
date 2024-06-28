
import { Layout,CardContener } from "../components";
import "../styles/home-page.scss";

const HomePage = () => {
  return (
    <>
      <Layout>
        <section id="home-page">
          <div className="banner">
            <div>
              <h2>Chez vous, partout et ailleurs</h2>
            </div>
          </div>
          <CardContener />
        </section>
      </Layout>
    </>
  );
};
export default HomePage;
