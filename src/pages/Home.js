// src/pages/Home.js


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
//import './HomePage.css'; // Import custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Photo Gallery</h1>
      <Carousel 
        showThumbs={false} 
        autoPlay 
        infiniteLoop 
        interval={3000} 
        transitionTime={500} 
      >
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;

