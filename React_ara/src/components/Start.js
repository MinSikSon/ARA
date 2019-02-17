import React, { Component } from 'react';
import MapAndList from './MapAndList.js'

class Start extends Component {
  render() {
    const styleComponent = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    
    console.log('Start.js render()');
    return (
      <div style={styleComponent}>
        <h2>[Start.js]</h2>
        <MapAndList />
      </div>
    );
  }
}

export default Start;
