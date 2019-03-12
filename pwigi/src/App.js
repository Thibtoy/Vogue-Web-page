import React from 'react';
import Header from './Header.js';
import Nav from './Nav';
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Nav></Nav>
        <Gallery></Gallery>
        <Footer></Footer>

      </div>
    )
  }
}

