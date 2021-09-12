import React from 'react';
import { render } from 'react-dom';
import WhiteNoise from './WhiteNoise.js'


const App = () => {

const examples = {
  'WhiteNoise': <WhiteNoise/>
}

const example = location.hash.slice(1);

const onExampleChange = e => {
  location.hash = e.target.value;
  location.reload();
};

  render(
    (
      <main>
        <header>
        <article>
          <h1><strong>Noise Transmission Reduction Simulator</strong></h1>
          <h2>Lee Brenner, Bay Area Noise Control</h2>
        </article>
          <label htmlFor="example-select">Select your scenario: </label>
          <select id="example-select" onChange={onExampleChange} value={example}>
          <option value="" disabled>Choose an example</option>
            {
              Object.keys(examples).map((ex, ei) => <option key={ei} value={ex}>{ex}</option>)
            }
          </select>
        </header>
        <hr/>
        <span></span>
        { examples[example] || null }
      </main>
    )
  )
}
export default App

// <option value="" disabled>Choose an example</option>
