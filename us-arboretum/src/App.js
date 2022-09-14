import logo from './logo.svg';
import './App.css';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
let ImgSize = {
  height: 225,
  width: 225
};

function importAllImages(i) {
  let images = {};
  i.keys().map((item, index) => { images[item.replace('./', '')] = i(item); });
  return images;
}

const images = importAllImages(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div>
      <div><Popup trigger={<button><img src={images['AmericanCherry.png']} style={ImgSize} /></button>} position="right center">
        <div>Wow! an American Cherry tree! Swallows and other birds LOVE this tree!</div>
      </Popup></div>
      <Popup trigger={<button><img src={images['BalsamFir.png']} style={ImgSize} /></button>} position="right center">
        <div>Wow! A Balsam Fir! These make excellent christmas trees!</div>
      </Popup>
    </div>
  );
}

export default App;
