import React, {Component} from 'react';

class RequestDayOff extends Component {
  render() {
    return (
      <div className="tab_contents">
        <div className="card_title">
          <h3>Day off</h3>
        </div>

        <div className="card_body">
          <div className="box_vacation">
            <p><i className="fas fa-umbrella-beach"></i> Vacation Days</p>
            <div className="vacation_days">17.0</div>
            <p>Days available</p>
          </div>

          <h3>Log</h3>
          <div className="box_info_select">
            <select name="" className="select">
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>

          <table className="table table-striped">
            <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Used</th>
              <th>Balance</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>01/01/2019</td>
              <td>Vacation days</td>
              <td>-1 days</td>
              <td>17 days</td>
            </tr>
            <tr>
              <td>01/01/2019</td>
              <td>Vacation days</td>
              <td>-1 days</td>
              <td>17 days</td>
            </tr>
            <tr>
              <td>01/01/2019</td>
              <td>Vacation days</td>
              <td>-1 days</td>
              <td>17 days</td>
            </tr>
            <tr>
              <td>01/01/2019</td>
              <td>Vacation days</td>
              <td>-1 days</td>
              <td>17 days</td>
            </tr>
            <tr>
              <td>01/01/2019</td>
              <td>Vacation days</td>
              <td>-1 days</td>
              <td>17 days</td>
            </tr>
            <tr>
              <td>01/01/2019</td>
              <td>Vacation days</td>
              <td>-1 days</td>
              <td>17 days</td>
            </tr>
            </tbody>
          </table>

        </div>

      </div>
    );
  }
}

export default RequestDayOff;