import React, {Component} from 'react';
import left from '../../../resources/css/Left.module.css';

class LeftVacant extends Component {
  render() {
    return (
      <div className={left.vacant}>
        <div className={left.vacant_days}>
          <span>vacation(days)</span>
          <p>17.0</p>
        </div>
        <div className={left.btn_vacant}>
          <a href="#" className='btn btn-violet btn-lg'><i className="fas fa-paper-plane" />Request day off</a>
        </div>
      </div>
    );
  }
}

export default LeftVacant;