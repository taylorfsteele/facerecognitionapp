import React from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import ParticleOptions from './ParticleOptions'

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={ParticleOptions} />
      <div className='App-header'>
        <Logo />
        <Navigation />
      </div>
      <Rank />
      <ImageLinkForm />
    </div >
  );
}

export default App;
