import React, { Component } from 'react';
import './StoryContent.css';

class StoryContent extends Component {
    render() {
      return (
        <div className="story__content">
            <h3 className="heading-3 mb-sm">Happy Customers</h3>
            <h2 className="heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
            <p className="story__text mb-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, molestie pharetra 
              maecenas est curabitur odio laoreet, non facilisi suspendisse duis luctus eu. 
              Ultrices cum posuere tellus lobortis sapien nibh pulvinar.
            </p>
            <button className="btn">Find your own home</button>
        </div>
      );
    }
}

export default StoryContent;