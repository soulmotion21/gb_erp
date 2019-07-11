import React, {Component} from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import {Home, MyInfo, Employees} from '../pages/index';
import TopUser from '../components/top/TopUser';
import TopLogo from "../components/top/TopLogo";
import TopNotification from "../components/top/TopNotification";
import Header from '../../resources/css/Header.module.css';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={Header.area_top}>
          <TopLogo/>
          <div className={Header.box_navi}>
            <div>
              <NavLink exact to="/" activeClassName={Header.active}><i className="fa fa-desktop"></i> Dashboard</NavLink>
              <NavLink to="/MyInfo" activeClassName={Header.active}><i className="fas fa-user-circle"></i> My info</NavLink>
              <NavLink to="/Employees" activeClassName={Header.active}><i className="fas fa-users"></i> Employees</NavLink>
            </div>
          </div>

          <div className={Header.box_user}>
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