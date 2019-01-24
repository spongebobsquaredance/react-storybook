import React, { Component } from 'react';
import SmallBox from './components/Boxes/SmallBox/SmallBox';
import { H1, H2, H3, H4, H5, H6 } from './components/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <H1 as="h1">Header One Text Example</H1>
        <H2 as="h2">Header One Text Example</H2>
        <H3 as="h3">Header One Text Example</H3>
        <H4 as="h4">Header One Text Example</H4>
        <H5 as="h5">Header One Text Example</H5>
        <H6 as="h6">Header One Text Example</H6>
        <div>
          <SmallBox boxText={ "Box One" } />
          <SmallBox boxText={ "Box Two" } />
          <SmallBox boxText={ "Box Three" } />
        </div>
      </div>
    );
  }
}

export default App;
