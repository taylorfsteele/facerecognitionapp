import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import ParticleOptions from './ParticleOptions';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '4c9b2ab0098840c09e52bc2203788902'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function (err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ParticleOptions} />
        <div className='App-header'>
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div >
    );
  }
}

export default App;
