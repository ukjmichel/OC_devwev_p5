import {
  Layout,
  LocationAvatar,
  LocationDetail,
  LocationTags,
  LocationScore,
  Carousel,
} from "../components";
import "../styles/location-page.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const LocationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState(null); // State to store specific location data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const foundLocationData = data.find((item) => item.id === id);
        if (!foundLocationData) {
          navigate("/error_page_not_found");
        } else {
          setLocationData(foundLocationData); // Set specific location data
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or in case of error
      }
    };

    fetchData();
  }, [id, navigate]);

  // Conditional rendering based on state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!locationData) return <p>Location not found.</p>; // Fallback if no location data

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

        <div className="location-content">
          <div className="location-name">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <LocationTags tags={tags} />
          <LocationScore rating={rating} />
          <LocationAvatar name={host.name} picture={host.picture} />
          <LocationDetail description={description} equipments={equipments} />
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
