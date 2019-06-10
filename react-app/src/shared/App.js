import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Login, Error } from 'pages';
import Menu from 'components/menu/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/Login/:name" component={Login}/>
          <Route path="/Login/" component={Login}/>
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;