import { Layout, CardContener } from "../components";
import "../styles/home-page.scss";
import data from "../../data.json";

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
          <CardContener data={data}/>
        </section>
      </Layout>
    </>
  );
};
export default HomePage;
