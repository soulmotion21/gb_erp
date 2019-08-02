import React, {Component} from 'react';
import Header from '../../../resources/css/Header.module.css';

class TopLogo extends Component {
  render() {
    return (
      <div className={Header.box_logo}>
        <a href="/"><span className={Header.logo}></span></a>
      </div>
    );
  }
}

export default TopLogo;