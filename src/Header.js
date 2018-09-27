import React, { Component } from 'react';
import './Header.css';
import logo from "./img/logo.png";
import logoBbc from "./img/logo-bbc.png";
import logoForbes from "./img/logo-forbes.png";
import logoTechcrunch from "./img/logo-techcrunch.png";
import logoBi from "./img/logo-bi.png";


class Header extends Component {
    render() {
      return (
        <header className="header">
            <img src={logo} alt="Nexter logo" className="header__logo"/>
            <h3 className="heading-3">Your own home: </h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn header__btn">View our properties</button>
            <div className="header__seenon-text">Seen on</div>
            <div className="header__seenon-logos">
              <img src={logoBbc} alt="Seen on logo 1" className="header__seenon-logo"/>
              <img src={logoForbes} alt="Seen on logo 2" className="header__seenon-logo"/>
              <img src={logoTechcrunch} alt="Seen on logo 3" className="header__seenon-logo"/>
              <img src={logoBi} alt="Seen on logo 4" className="header__seenon-logo"/>
            </div>
        </header>
      );
    }
}

export default Header;