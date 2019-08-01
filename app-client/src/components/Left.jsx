import React, {Component} from 'react';
import LeftVacant from "./left/LeftVacant";
import left from '../../resources/css/Left.module.css';
import TopLogo from "./left/TopLogo";

class Left extends Component {
  render() {
    return (
      <div className={left.area_left}>
        <TopLogo />
        <div className={left.box_info}>
          <div className={left.pic}><img src="../resources/img/img4.png" alt="" /></div>

          <div className={left.name}>
            <p>David Kim</p>
            <span>Senior front-end developer</span>
          </div>

          <LeftVacant />

        </div>
      </div>
    );
  }
}

export default Left;