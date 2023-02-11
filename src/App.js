import Navbar from "./components/Navbar"
import Location from "./components/Location"
import data from "./data"

function App() {
  const locations = data.map(location => {
    return (
        <Location
          key={location.id}
          item={location}
        />
    )
  })
  return (
    <div>
      <Navbar />
      <div className="travel-page">
        {locations}
      </div>
    </div>
  );
}

export default App;
