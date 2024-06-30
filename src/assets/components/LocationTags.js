const LocationTag = ({tag}) => {
  return <button>{tag}</button>;
};

const LocationTags = ({tags}) => {


  return (
    <div className="location-tag">
      {tags.map((tag,index) => (
        <LocationTag key={index} tag={tag} />
      ))}
    </div>
  );
};
export default LocationTags;
