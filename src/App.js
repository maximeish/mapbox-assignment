import MapWrapper from "./Map";
import "./assets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mapbox Map <small>by Maxime Ishimwe</small>
      </header>
      <div id="map-wrapper">
        <MapWrapper />
      </div>
    </div>
  );
}

export default App;
