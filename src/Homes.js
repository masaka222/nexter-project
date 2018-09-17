import React, { Component } from 'react';
import './Homes.css';
import home1 from './img/house-1.jpeg';
import home2 from './img/house-2.jpeg';
import home3 from './img/house-3.jpeg';
import home4 from './img/house-4.jpeg';
import home5 from './img/house-5.jpeg';
import home6 from './img/house-6.jpeg';
import IconHeart from './IconHeart';
import IconPin from './IconPin';
import IconKey from './IconKey';
import IconPerson from './IconPerson';
import IconExpand from './IconExpand';

class Homes extends Component {
    render() {
      return (
        <section className="homes">
            <div className="home">
              <img className="home__img" src={home1} alt="House 1"/>
              <IconHeart/>
              <h5 className="home_name">Beautiful Family House </h5>
              <div className="home__location">
                <IconPin/>
                <p>USA</p>
              </div>
              <div className="home__rooms">
                <IconPerson/>
                <p>5 rooms</p>
              </div>
              <div className="home__area">
                <IconExpand/>
                <p>325 m<sup>2</sup></p>
              </div>
              <div className="home__price">
                <IconKey/>
                <p>$1,200,000</p>
              </div>
              <button className="cta">Contact realtor</button>
            </div>



            <div className="home">
              <img className="home__img" src={home2} alt="House 2"/>
              <IconHeart/>
              <h5 className="home_name">Modern Glass Villa </h5>
              <div className="home__location">
                <IconPin/>
                <p>Canada</p>
              </div>
              <div className="home__rooms">
                <IconPerson/>
                <p>6 rooms</p>
              </div>
              <div className="home__area">
                <IconExpand/>
                <p>450 m<sup>2</sup></p>
              </div>
              <div className="home__price">
                <IconKey/>
                <p>$2,750,000</p>
              </div>
              <button className="cta">Contact realtor</button>
            </div>
            <div className="home">
              <img className="home__img" src={home3} alt="House 3"/>
              <IconHeart/>
              <h5 className="home_name"> Cozy Country House </h5>
              <div className="home__location">
                <IconPin/>
                <p>UK</p>
              </div>
              <div className="home__rooms">
                <IconPerson/>
                <p>4 rooms</p>
              </div>
              <div className="home__area">
                <IconExpand/>
                <p>250 m<sup>2</sup></p>
              </div>
              <div className="home__price">
                <IconKey/>
                <p>$850,000</p>
              </div>
              <button className="cta">Contact realtor</button>
            </div>


            
            <div className="home">
              <img className="home__img" src={home4} alt="House 4"/>
              <IconHeart/>
              <h5 className="home_name">Large Rustical Villa </h5>
              <div className="home__location">
                <IconPin/>
                <p>Portugal</p>
              </div>
              <div className="home__rooms">
                <IconPerson/>
                <p>6 rooms</p>
              </div>
              <div className="home__area">
                <IconExpand/>
                <p>480 m<sup>2</sup></p>
              </div>
              <div className="home__price">
                <IconKey/>
                <p>$1,950,000</p>
              </div>
              <button className="cta">Contact realtor</button>
            </div>



            <div className="home">
            <img className="home__img" src={home5} alt="House 5"/>
              <IconHeart/>
              <h5 className="home_name">Beautiful Family House </h5>
              <div className="home__location">
                <IconPin/>
                <p>Germany</p>
              </div>
              <div className="home__rooms">
                <IconPerson/>
                <p>12 rooms</p>
              </div>
              <div className="home__area">
                <IconExpand/>
                <p>4230 m<sup>2</sup></p>
              </div>
              <div className="home__price">
                <IconKey/>
                <p>$9,500,000</p>
              </div>
              <button className="cta">Contact realtor</button>
            </div>



            <div className="home">
              <img className="home__img" src={home6} alt="House 6"/>
              <IconHeart/>
              <h5 className="home_name">Modern Family Apartment </h5>
              <div className="home__location">
                <IconPin
                  width="2rem"
                  height="2rem"
                  fill="#c69963"
                />
                <p>Italy</p>
              </div>
              <div className="home__rooms">
                <IconPerson/>
                <p>3 rooms</p>
              </div>
              <div className="home__area">
                <IconExpand/>
                <p>180 m<sup>2</sup></p>
              </div>
              <div className="home__price">
                <IconKey/>
                <p>$600,000</p>
              </div>
              <button className="cta">Contact realtor</button>
            </div>
        </section>
      );
    }
}

export default Homes;