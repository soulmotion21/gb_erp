import React, {Component} from 'react';
import LeftVacant from "./left/LeftVacant";

class Left extends Component {
  render() {
    return (
      <div className="area_left">
        <div className="box_info">
          <div className="pic"><img src="../resources/img/img4.jpg" alt="" /></div>

          <div className="name">
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