import './App.css';
import WhiteNoise from  './WhiteNoise.js'

const App = () => {
  return (
    <div className="App">
      <h1><strong>Noise Transmission Reduction Simulator</strong></h1>
      <h2>Lee Brenner, Bay Area Noise Control</h2>
      <div>
        <WhiteNoise/>
      </div>
    </div>
  );
}

export default App;
