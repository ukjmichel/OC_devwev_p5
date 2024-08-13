import CollapseCard from "./CollapseCard";

const ListElement = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Ideally use a unique id instead of the index in real-world apps
      ))}
    </ul>
  );
};

const LocationDetail = ({ description, equipments }) => {
  return (
    <div className="location-detail">
      <div>
        <CollapseCard content={description} title="Description" />
      </div>
      <div>
        <CollapseCard
          content={<ListElement items={equipments} />}
          title="Equipements"
        />
      </div>
    </div>
  );
};
export default LocationDetail;
