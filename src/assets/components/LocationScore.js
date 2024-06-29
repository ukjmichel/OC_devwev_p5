import starFill from "../images/star_fill.svg"
import starEmpty from "../images/star_empty.svg"

const StarFill = ()=>{
    return <><img src={starFill} alt="1 star"/></>
}

const StarEmpty = () => {
  return (
    <>
      <img src={starEmpty} alt="0 star" />
    </>
  );
};

const LocationScore = () => {
  return (
    <div className="location-score">
        <StarFill/>
        <StarFill/>
        <StarFill/>
        <StarEmpty/>
        <StarEmpty/>
    </div>
  )
}
export default LocationScore