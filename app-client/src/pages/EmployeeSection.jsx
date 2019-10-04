import React, {Component} from 'react';
import EmployeeList from '../pages/EmployeeList';

class EmployeeSection extends Component {
  state = {
    employeeData: ""
  };

  componentDidMount() {
    this.callApi().then(result => {
      this.setState({
        employeeData: result
      });
    }).catch(error => {
      console.log(error);
    });
  }

  callApi = async () => {
    const response = await fetch('./src/temp_json/Employees.json');
    const body = await response.json();
    return body;
  };

  render() {
    // console.log(this.state.employeeData);
    return (
      <div>
        {this.state.employeeData ? this.state.employeeData.map(c => {
          return(<div key={c.section}><p className="employee_group">{c.section}</p></div>);
        }) : ""}
        <EmployeeList />
      </div>
    );
  }
}

export default EmployeeSection;