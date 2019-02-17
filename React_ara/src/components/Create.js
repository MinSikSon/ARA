import React, { Component } from 'react';

class Create extends Component {
  render() {
    console.log('Create.js render() START');
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    return (
      <div style={style}>
          Create.js 페이지다!!
          {console.log('Create.js render() END')}
      </div>
    );
  }
}

export default Create;
