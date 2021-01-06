import axios from "axios";
import React, { Component } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
import styles from "../components/employeeCard.module.css";

class users extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    );
  }
}

export const getStaticProps = async () => {
  let { data } = await axios(url);
  return {
    props: { users: [...data] },
  };
};

export default users;
