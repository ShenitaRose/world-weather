import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by {""}
        <a href='#' target="_blank">Shenita Rose </a> and is {""}
        <a href="https://github.com/ShenitaRose/world-weather" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
