import Carousel from "./components/Carousel";
import {detalleCard} from './data/data.js';
import "./App.css";
import NavBar from "./components/NavBar";
import CardApp from "./components/CardApp";

function App() {
  return (
    <>
      <NavBar />
      <Carousel/>
      <div className="container">
        <div className="row">
          {detalleCard.map((item, index) => (
            <CardApp item = {item} key={index}/>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default App;
