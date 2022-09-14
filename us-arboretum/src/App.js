import logo from './logo.svg';
import './App.css';
import AmericanCherry from './assets/AmericanCherry.png';

function importAllImages(i) {
  let images = {};
  i.keys().map((item, index) => { images[item.replace('./', '')] = i(item); });
  return images;
}

const images = importAllImages(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div>
      <img src={images['AmericanCherry.png']} />
    </div>
  );
}

export default App;
