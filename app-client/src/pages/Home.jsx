import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div className='area_contents'>
        <div className="row">
          <div className="col">
            <div className="card_section card_top_info">
              <div className="box_icon">
                <i className="fas fa-laptop"></i>
              </div>
              <div className="box_numbers">
                <p>16</p>
                <span>Today's attendance</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card_section card_top_info">
              <div className="box_icon icon_vacation">
                <i className="fas fa-umbrella-beach"></i>
              </div>
              <div className="box_numbers">
                <p>2</p>
                <span>Today's day off</span>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-6">
            <div className="card_section card_main_notice">
              <div className="card_title">
                <h3>Notice</h3>
              </div>
              <ul>
                <li>Access to the GBC group was granted <span>07-02</span></li>
                <li>Hyperledger Fabric Global Forum 2019 <span>06-29</span></li>
                <li>Smart Contract Visualization <span>06-25</span></li>
                <li>IoT Graph development <span>06-17</span></li>
                <li>Weekly meeting agenda - 2019/06/17 <span>06-11</span></li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="card_section card_todo">
              <div className="card_title">
                <h3>Todo list</h3>
              </div>
              <ul>
                <li>Check out flight ticket <span className="list_badge badge_green">2 days</span></li>
                <li>Hit the gym <span className="list_badge badge_red">1 hour</span></li>
                <li>Send marketing report <span className="list_badge badge_yellow">not important</span></li>
                <li>Commit modified pages <span className="list_badge badge_mint">tomorrow</span></li>
                <li>Commit modified pages <span className="list_badge badge_mint">tomorrow</span></li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="card_section card_entry">
              <div className="card_title">
                <h3>Welcome to GBC</h3>
              </div>
              <ul>
                <li>
                  <span className="box_pic">S</span>
                  <div className="box_name">
                    <p>Sunny Kim</p>
                    <span>Web designer</span>
                  </div>
                  <div className="box_branch">GBC Korea</div>
                </li>
                <li>
                  <span className="box_pic"><img src="../resources/img/img4.jpg" alt=""/></span>
                  <div className="box_name">
                    <p>Josh Nirav</p>
                    <span>Project manager</span>
                  </div>
                  <div className="box_branch">GBC Canada</div>
                </li>
                <li>
                  <span className="box_pic">B</span>
                  <div className="box_name">
                    <p>Bhavesh Patel</p>
                    <span>Data science</span>
                  </div>
                  <div className="box_branch">GBC Canada</div>
                </li>
                <li>
                  <span className="box_pic">H</span>
                  <div className="box_name">
                    <p>Hezekiah Bacovcin</p>
                    <span>Developer</span>
                  </div>
                  <div className="box_branch">GBC Canada</div>
                </li>
              </ul>

            </div>
          </div>

          <div className="col-6">
            <div className="card_section card_meet_room">
              <div className="card_title">
                <h3>Meeting room status</h3>
              </div>
              <table className="table table_center">
                <thead>
                <tr>
                  <th>Room No.</th>
                  <th>Status</th>
                  <th>Duration</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Meeting room #1</td>
                  <td><span className="list_badge badge_red">Unavailable</span></td>
                  <td>11:00 ~ 13:00</td>
                </tr>
                <tr>
                  <td>Meeting room #2</td>
                  <td><span className="list_badge badge_green">Available</span></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Meeting room #3</td>
                  <td><span className="list_badge badge_red">Unavailable</span></td>
                  <td>09:00 ~ 10:30</td>
                </tr>
                <tr>
                  <td>Meeting room #4</td>
                  <td><span className="list_badge badge_violet">TBD</span></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Meeting room #5</td>
                  <td><span className="list_badge badge_red">Unavailable</span></td>
                  <td>16:00 ~ 16:30</td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;