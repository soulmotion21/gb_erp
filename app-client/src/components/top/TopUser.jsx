import React, {Component} from 'react';
import Header from '../../../resources/css/Header.module.css';

class TopUser extends Component {
  render() {
    return (
      <div className={Header.user}>
        <img src="../resources/img/img4.png" alt="" />
      </div>
    );
  }
}

export default TopUser;