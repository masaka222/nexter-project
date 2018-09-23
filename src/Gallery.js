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
          <figure className="gallery__item gallery__item--2">
            <img src={gal2} alt="Gallery image 2" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={gal3} alt="Gallery image 3" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={gal4} alt="Gallery image 4" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={gal5} alt="Gallery image 5" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={gal6} alt="Gallery image 6" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src={gal7} alt="Gallery image 7" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src={gal8} alt="Gallery image 8" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src={gal9} alt="Gallery image 9" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src={gal10} alt="Gallery image 10" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src={gal11} alt="Gallery image 11" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src={gal12} alt="Gallery image 12" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img src={gal13} alt="Gallery image 13" className="gallery__img"></img>
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img src={gal14} alt="Gallery image 14" className="gallery__img"></img>
          </figure>
        </section>
      );
    }
}

export default Gallery;