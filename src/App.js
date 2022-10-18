import './assets/css/App.css';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Discount from './components/Discount';

function App() {

  const discount = "10";

  return (
    <div className="App">
      <Welcome name="Mohammed" age="19" job="Web Designer" />
      <Welcome age="21" job="Web Developer" />
      <Discount value={discount} />
      <div className="products-container">
        <Product name="Dragon Headphone" price="35" />
        <Product name="iPhone 14" price="900" />
        <Product name="Cpu Snap Dragon" price="400" />
        <Product name="Playstation 5" price="500" />
        <Product name="Xbox-one" price="450" />
      </div>
    </div>
  );
}

export default App;
