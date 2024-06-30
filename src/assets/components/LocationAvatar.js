const LocationAvatar = ({name="name",picture}) => {
  return (
    <div className="location-avatar">
      <h3>{name}</h3>
      <img src={picture} alt={name}/>
      </div>
  )
}
export default LocationAvatar