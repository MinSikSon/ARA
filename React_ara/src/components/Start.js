import React, { Component } from 'react';
import MapAndList from './MapAndList.js'

class Start extends Component {
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    
    console.log('Start.js render()');
    return (
      <div style={style}>
        <MapAndList />
      </div>
    );
  }
}

export default Start;
