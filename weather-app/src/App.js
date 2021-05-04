import Forecast from './Components/Forecast/Forecast'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Weather App using Dark Sky API
        </h1>
        <main>
        <Forecast />
      </main>
      <footer style={{color:'black'}}>
        Page created by Anuj Pradeep
      </footer>
      </header>
    </div>
  );
}

export default App;
