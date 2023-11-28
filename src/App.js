import './App.css';
import Search  from './components/search/search';
import CurrentWeather from './components/current_weather/current_weather';
import { Weather_API_URL, Weather_API_KEY } from './api';

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(`${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY }`)

  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />

    </div>
  );
    
}

export default App;
// @babel/plugin-proposal-private-property-in-object