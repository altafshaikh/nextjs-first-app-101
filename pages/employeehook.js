import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
function employeesHook() {
  const [employees, setEmployees] = useState([]);

  //useEffect is for lifecycle method
  useEffect(async () => {
    let { data } = await axios(url);
    setEmployees([...data]);
  }, []);
  return (
    <div>
      <h1>UseEffect and useState Hook</h1>
      {employees.map((employee) => {
        return <p key={employee.id}>{employee.name}</p>;
      })}
    </div>
  );
}

export default employeesHook;
