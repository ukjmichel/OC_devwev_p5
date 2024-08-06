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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const LocationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDataExist, setIsDataExist] = useState(false);

  const locationData = data.filter((item) => item.id === id)[0];

  useEffect(() => {
    if (!locationData) {
      // Redirect to the `/error` route if the `id` is invalid
      navigate("/error_page_not_found");
    } else {
      setIsDataExist(true);
    }
  }, [locationData, navigate]);

  if (isDataExist) {
    const {
      cover,
      rating,
      title,
      description,
      location,
      equipments,
      tags,
      host,
      pictures,
    } = locationData;

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
              <LocationScore rating={rating} />
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
              <LocationScore rating={rating} />
            </div>
            <LocationDetail description={description} equipments={equipments} />
          </div>
        </section>
      </Layout>
    );
  }
};
export default LocationPage;
