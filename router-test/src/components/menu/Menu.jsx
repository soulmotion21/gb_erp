import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li><NavLink exact to="/" className="item" activeClassName="active">홈</NavLink></li>
          <li><NavLink to="/About" className="item" activeClassName="active">소개</NavLink></li>
          <li><NavLink to="/Login" className="item" activeClassName="active">로그인</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
