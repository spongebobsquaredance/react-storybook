import React, { Component } from 'react';
import SmallBox from './components/Boxes/SmallBox/SmallBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <SmallBox />
          <SmallBox />
          <SmallBox />
        </div>
      </div>
    );
  }
}

export default App;
