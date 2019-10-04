import React, {Component} from 'react';


class EmployeeList extends Component {
  state = {
    employeeListData: ""
  };

  componentDidMount() {
    this.callApi().then(result => {
      console.log(result);
      result.forEach((v) => {
        this.setState({
          employeeListData: v.list
        });
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
    // console.log(this.state.employeeListData);
    return (
      <ul>
        {this.state.employeeListData ? this.state.employeeListData.map(c => {
          return(
            <li key={c.name}>
              <div className="box_pic"></div>
              <div className="box_name">
                <p>{c.name}</p>
                <span>{c.job}</span>
              </div>
              <div className="box_info">
                <p>{c.email}</p>
                <p>{c.cellphone}</p>
              </div>
            </li>
          )
        }) : ""}
      </ul>
    );
  }
}


export default EmployeeList;