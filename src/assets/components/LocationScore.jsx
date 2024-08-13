import StarFill from "./StarFill";
import StarEmpty from "./StarEmpty";

const LocationScore = ({ rating }) => {
  const locationRating = Number(rating);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < locationRating) {
        stars.push(<StarFill key={i} />);
      } else {
        stars.push(<StarEmpty key={i} />);
      }
    }
    return stars;
  };

  return <div className="location-score">{renderStars()}</div>;
};
export default LocationScore;
