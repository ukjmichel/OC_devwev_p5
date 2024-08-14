import CollapseCard from "./CollapseCard";

const LocationDetail = ({ description, equipments }) => {
  return (
    <div className="location-detail">
      <div>
        <CollapseCard content={description} title="Description" />
      </div>
      <div>
        <CollapseCard
          content={
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li> // Ideally use a unique id instead of the index in real-world apps
              ))}
            </ul>
          }
          title="Equipements"
        />
      </div>
    </div>
  );
};
export default LocationDetail;
