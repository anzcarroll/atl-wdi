import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Menu from './Components/MenuList';
import SplashImage from './Components/SplashImage';
import Description from './Components/Description';
import LocationList from './Components/LocationList';
import Contact from './Components/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SplashImage />
        <Description />
        <Menu />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;
