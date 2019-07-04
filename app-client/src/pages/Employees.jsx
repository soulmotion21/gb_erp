import React, {Component} from 'react';

class Employees extends Component {
  render() {
    return (
      <div className='area_contents'>
        <div className="row">
          <div className="col">
            <div className="card_section">

              <div className="box_employee_search">
                <input type="text" className="form-control form-control-lg" />
                  <a href="#"><i className="fas fa-search"></i></a>
              </div>

              <div className="list_employee">
                <p className="employee_group">A</p>
                <ul>
                  <li>
                    <div className="box_pic">A</div>
                    <div className="box_name">
                      <p>Ailee</p>
                      <span>Junior Developer</span>
                    </div>
                    <div className="box_info">
                      <p>ailee@gbc.com</p>
                      <p>+82 10 1234-5678</p>
                    </div>
                  </li>
                  <li>
                    <div className="box_pic">A</div>
                    <div className="box_name">
                      <p>Ailee</p>
                      <span>Junior Developer</span>
                    </div>
                    <div className="box_info">
                      <p>ailee@gbc.com</p>
                      <p>+82 10 1234-5678</p>
                    </div>
                  </li>
                  <li>
                    <div className="box_pic">A</div>
                    <div className="box_name">
                      <p>Ailee</p>
                      <span>Junior Developer</span>
                    </div>
                    <div className="box_info">
                      <p>ailee@gbc.com</p>
                      <p>+82 10 1234-5678</p>
                    </div>
                  </li>
                  <li>
                    <div className="box_pic">A</div>
                    <div className="box_name">
                      <p>Ailee</p>
                      <span>Junior Developer</span>
                    </div>
                    <div className="box_info">
                      <p>ailee@gbc.com</p>
                      <p>+82 10 1234-5678</p>
                    </div>
                  </li>
                </ul>

                <p className="employee_group">B</p>
                <ul>
                  <li>
                    <div className="box_pic">B</div>
                    <div className="box_name">
                      <p>Ailee</p>
                      <span>Junior Developer</span>
                    </div>
                    <div className="box_info">
                      <p>ailee@gbc.com</p>
                      <p>+82 10 1234-5678</p>
                    </div>
                  </li>
                  <li>
                    <div className="box_pic">B</div>
                    <div className="box_name">
                      <p>Ailee</p>
                      <span>Junior Developer</span>
                    </div>
                    <div className="box_info">
                      <p>ailee@gbc.com</p>
                      <p>+82 10 1234-5678</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Employees;