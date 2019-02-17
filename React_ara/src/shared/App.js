import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Create, About } from 'pages';
import { Menu } from 'components';

class App extends Component {
  render() {

    const styleApp = {
      border: '5px solid black',
      padding: '8px',
      margin: '8px'
    };

    console.log('App.js render() START');
    return (
      <div style={styleApp}>
        {/* <Menu/> */}

        <Route exact path="/" component={Home}/>
        <Route path="/create" component={Create}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
          
        </Switch>
        {console.log('App.js render() END')}
      </div>
    );
  }
}

export default App;
