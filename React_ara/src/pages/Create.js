import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContentForm } from 'components';

class Create extends Component {
  render() {
    console.log('Create.js render() START');
    const stylePage = {
      border: '3px solid black',
      padding: '8px',
      margin: '8px'
    };

    const activeStyle = {
      color: 'red',
      fontSize: '2rem'
  };

    return (
      <div style={stylePage}>
          <h2>[Create.js]</h2>
          <li><NavLink exact to ="/" activeStyle={activeStyle}>뒤로가기</NavLink></li>
          
          <ContentForm/>
          
          {console.log('Create.js render() END')}
      </div>
    );
  }
}

export default Create;
