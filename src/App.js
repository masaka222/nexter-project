import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';
import Features from './Features';
import StoryPictures from './StoryPictures';
import StoryContent from './StoryContent';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <StoryPictures />
        <StoryContent />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
