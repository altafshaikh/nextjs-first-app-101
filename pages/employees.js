import axios from "axios";
import React, { Component } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
class employees extends Component {
  state = { employess: [] };
  componentDidMount = async () => {
    let { data } = await axios(url);
    this.setState({ employees: [...data] });
  };
  render() {
    return (
      <div>
        {this.state.employess.map((employee) => {
          return <p key={employee.id}>{employee.name}</p>;
        })}
      </div>
    );
  }
}

export default employees;
