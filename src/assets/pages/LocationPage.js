import {
  Layout,
  LocationAvatar,
  LocationDetail,
  LocationFilter,
  LocationScore,
} from "../components";
import "../styles/location-page.scss";
import prewiew from "../images/appart.jpg";

const LocationPage = () => {
  return (
    <Layout>
      <section id="location-page">
        <figure>
          <img src={prewiew} alt="prewiew of a location" />
        </figure>
        <div className="location-content display-mobile">
          <div className="location-name">
            <h1>Paris center, on the romantic Canal Saint-Martin</h1>
            <p>Paris, île-de-France</p>
          </div>
          <LocationFilter />
          <div className="flex-1">
            <LocationScore />
            <LocationAvatar />
          </div>
          <LocationDetail />
        </div>
        <div className="location-content display-desktop">
          <div className="flex-1">
            <div className="location-name">
              <h1>Paris center, on the romantic Canal Saint-Martin</h1>
              <p>Paris, île-de-France</p>
            </div>
            <LocationAvatar />
          </div>
          <div className="flex-1">
            <LocationFilter />
            <LocationScore />
          </div>
          <LocationDetail />
        </div>
      </section>
    </Layout>
  );
};
export default LocationPage;
