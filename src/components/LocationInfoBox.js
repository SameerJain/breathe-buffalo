const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2 className="info-heading">Wildfire Information</h2>
      <ul>
        <li>
          Wildfire ID: <strong className="info-value">{info.id}</strong>
        </li>
        <li>
          Name: <strong className="info-value">{info.title}</strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfoBox