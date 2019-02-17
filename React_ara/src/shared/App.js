import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

class App extends Component {
  render() {

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    console.log('App.js render() START');
    return (
      <div style={style}>
        {/* <Start /> */}
        <Route exact path="/" component={Home}/>
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
