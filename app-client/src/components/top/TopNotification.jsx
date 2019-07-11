import React, {Component} from 'react';
import Header from '../../../resources/css/Header.module.css';

class TopNotification extends Component {
  render() {
    return (
      <div className={Header.notification}>
        <i className="far fa-bell"></i>
        <span>5</span>
      </div>
    );
  }
}

export default TopNotification;