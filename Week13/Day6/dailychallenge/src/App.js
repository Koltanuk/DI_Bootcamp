import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the carousel styles
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <h1>React Carousel</h1>
      <Carousel>
        <div>
          <img src="./img/hongcong.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="./img/macao.webp" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="./img/japan.webp" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="./img/lasvegas.webp" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
