import React, {Component} from 'react';
import {Employees, Home, MyInfo} from "../pages";
import {Route} from 'react-router-dom';

class Contents extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/MyInfo' component={MyInfo}/>
        <Route path='/Employees' component={Employees}/>
      </div>
    );
  }
};

export default Contents;