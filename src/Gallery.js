import React, { Component } from 'react';
import './Gallery.css';
import gal1 from './img/gal-1.jpeg'; 
import gal2 from './img/gal-2.jpeg'; 
import gal3 from './img/gal-3.jpeg'; 
import gal4 from './img/gal-4.jpeg'; 
import gal5 from './img/gal-5.jpeg'; 
import gal6 from './img/gal-6.jpeg'; 
import gal7 from './img/gal-7.jpeg'; 
import gal8 from './img/gal-8.jpeg'; 
import gal9 from './img/gal-9.jpeg'; 
import gal10 from './img/gal-10.jpeg'; 
import gal11 from './img/gal-11.jpeg'; 
import gal12 from './img/gal-12.jpeg'; 
import gal13 from './img/gal-13.jpeg'; 
import gal14 from './img/gal-14.jpeg'; 


class Gallery extends Component {
    render() {
      return (
        <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={gal1} alt="Gallery image 1" className="gallery__img"></img>
        </figure>
      
        </section>
      );
    }
}

export default Gallery;