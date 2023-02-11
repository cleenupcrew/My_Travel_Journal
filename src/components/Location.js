import Locationicon from "../images/location-icon.png"

export default function Location(props) {
  return (
    <div className="location">
      <img src={props.item.imageUrl} className="location-image"></img>
      <div className="location-container">
        <img src={Locationicon} className="location-logo"></img>
        <span className="location-country">{props.item.country}</span>
        <span className="location-url">View on Google Maps</span>
        <h1 className="location-city">{props.item.title}</h1>
        <h3 className ="location-dates">{props.item.startDate} - {props.item.endDate}</h3>
        <p className = "location-info">{props.item.description}</p>
      </div>
    </div>
  )
}