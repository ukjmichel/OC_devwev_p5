import LocationTag from "./LocationTag";

const LocationTags = ({ tags }) => {
  return (
    <div className="location-tags">
      {tags.map((tag, index) => (
        <LocationTag key={index} tag={tag} />
      ))}
    </div>
  );
};
export default LocationTags;
