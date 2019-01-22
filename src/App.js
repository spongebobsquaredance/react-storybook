import React, { Component } from 'react';
import SmallBox from './components/Boxes/SmallBox/SmallBox';

class App extends Component {
  render() {
    return (
      <div className="App">
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
