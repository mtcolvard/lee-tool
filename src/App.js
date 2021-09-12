import React from 'react'
import Interface from './Interface'
import WhiteNoise from './WhiteNoise'
import './App.css'

function App() {
  return (
    <div className="divZero">
      <header>
        <h1><strong>Noise Transmission Reduction Simulator</strong></h1>
        <h2>Lee Brenner, Bay Area Noise Control</h2>
      </header>
      <Interface />
      <WhiteNoise />
    </div>
  )
}

export default App
