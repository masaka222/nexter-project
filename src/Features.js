import React, { Component } from 'react';
import './Features.css';
import IconEarth from './IconEarth';
import IconTrophy from './IconTrophy';
import IconPin from './IconPin';
import IconKey from './IconKey';
import IconPresentation from './IconPresentation';
import IconLock from './IconLock';


class Features extends Component {
    render() {
      return (
        <section className="features">
            <div className="feature">
              <IconEarth
                width="4.5rem" 
                height="4.5rem"
              />
              <h4 className="heading-4--dark">World's best luxury homes</h4>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac magnis 
                gravida dictum, curae libero etiam imperdiet hendrerit aenean 
                vestibulum ultricies primis euismod.
              </p>
            </div>

            <div className="feature">
              <IconTrophy/>
              <h4 className="heading-4--dark">Only the best properties</h4>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac magnis 
                gravida dictum, curae libero etiam imperdiet hendrerit aenean 
                vestibulum ultricies primis euismod.
              </p>
            </div>

            <div className="feature">
            <div className="feature__icon"><IconPin/></div>
              <h4 className="heading-4--dark">All homes in top locations</h4>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac magnis 
                gravida dictum, curae libero etiam imperdiet hendrerit aenean 
                vestibulum ultricies primis euismod.
              </p>
            </div>

            <div className="feature">
              <div className="feature__icon"><IconKey/></div>
              <h4 className="heading-4--dark">New home in one week</h4>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac magnis 
                gravida dictum, curae libero etiam imperdiet hendrerit aenean 
                vestibulum ultricies primis euismod.
              </p>
            </div>

            <div className="feature">
              <IconPresentation/>
              <h4 className="heading-4--dark">Top 1% realtors</h4>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac magnis 
                gravida dictum, curae libero etiam imperdiet hendrerit aenean 
                vestibulum ultricies primis euismod.
              </p>
            </div>

            <div className="feature">
              <IconLock/>
              <h4 className="heading-4--dark">Secure payments on nexter</h4>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac magnis 
                gravida dictum, curae libero etiam imperdiet hendrerit aenean 
                vestibulum ultricies primis euismod.
              </p>
            </div>
        </section>
      );
    }
}

export default Features;