import React, {Component} from 'react';
import Employee from '../../resources/css/Employee.module.css';
import EmployeeSection from '../pages/EmployeeSection';

class Employees extends Component {

  render() {
    return (
      <div className='area_contents'>
        <div className="row">
          <div className="col">
            <div className="card_section">

              <div className={Employee.box_employee_search}>
                <input type="text" className="form-control form-control-lg"/>
                <a href="#"><i className="fas fa-search"></i></a>
              </div>

              <div className={Employee.list_employee}>
                <EmployeeSection/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
}


export default Employees;