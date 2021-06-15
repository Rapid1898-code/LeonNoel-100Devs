import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="75%"></Header>
        <Header backColor="lightgreen" width="55%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
