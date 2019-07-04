import React, {Component} from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import {Home, MyInfo, Employees} from '../pages/index';
import TopUser from '../components/top/TopUser';
import TopLogo from "../components/top/TopLogo";
import TopNotification from "../components/top/TopNotification";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='area_top'>
          <TopLogo/>
          <div className="box_navi">
            <div>
              <NavLink exact to="/" activeClassName="active"><i className="fa fa-desktop"></i>Dashboard</NavLink>
              <NavLink to="/MyInfo" activeClassName="active"><i className="fas fa-user-circle"></i> My info</NavLink>
              <NavLink to="/Employees" activeClassName="active"><i className="fas fa-users"></i> Employees</NavLink>
            </div>
          </div>

          <div className='box_user'>
            <TopNotification/>
            <TopUser/>
          </div>

        </div>

        <Route exact path='/' component={Home}/>
        <Route path='/MyInfo' component={MyInfo}/>
        <Route path='/Employees' component={Employees}/>
      </BrowserRouter>
    );
  }
}

export default Routes;