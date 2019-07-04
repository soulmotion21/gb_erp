import React, {Component} from 'react';

class LeftVacant extends Component {
  render() {
    return (
      <div className="vacant">
        <div className="vacant_days">
          <span>vacation(days)</span>
          <p>17.0</p>
        </div>
        <div className="btn_vacant">
          <a href="#" className="btn btn-violet btn-lg"><i className="im im-paperplane" />Request day off</a>
        </div>
      </div>
    );
  }
}

export default LeftVacant;