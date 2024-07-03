import {
  Layout,
  LocationAvatar,
  LocationDetail,
  LocationTags,
  LocationScore,
  Carousel,
} from "../components";
import "../styles/location-page.scss";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const LocationPage = () => {
  const { id } = useParams();
  const locationData = data.filter((item) => item.id === id)[0];
  const {  title, description, location, equipments, tags, host,pictures } =
    locationData;

  return (
    <Layout>
      <section id="location-page">
        <Carousel images={pictures} />

        <div className="location-content display-mobile">
          <div className="location-name">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <LocationTags tags={tags} />
          <div className="flex-1">
            <LocationScore />
            <LocationAvatar name={host.name} picture={host.picture} />
          </div>
          <LocationDetail description={description} equipments={equipments} />
        </div>

        <div className="location-content display-desktop">
          <div className="flex-1">
            <div className="location-name">
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
            <LocationAvatar name={host.name} picture={host.picture} />
          </div>
          <div className="flex-1">
            <LocationTags tags={tags} />
            <LocationScore />
          </div>
          <LocationDetail description={description} equipments={equipments} />
        </div>
      </section>
    </Layout>
  );
};
export default LocationPage;
