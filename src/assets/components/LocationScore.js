import starFill from "../images/star_fill.svg";
import starEmpty from "../images/star_empty.svg";

const StarFill = () => {
  return (
    <>
      <img src={starFill} alt="1 star" />
    </>
  );
};

const StarEmpty = () => {
  return (
    <>
      <img src={starEmpty} alt="0 star" />
    </>
  );
};

const LocationScore = ({ rating }) => {
  const locationRating = Number(rating);
  console.log(locationRating);
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
