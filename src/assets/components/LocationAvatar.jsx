const LocationAvatar = ({ name = "name", picture }) => {
  const [firstname, lastName] = name.split(" ");
  return (
    <div className="location-avatar">
      <div>
        <p>{firstname}</p>
        <p>{lastName}</p>
      </div>
      <img src={picture} alt={name} />
    </div>
  );
};
export default LocationAvatar;
