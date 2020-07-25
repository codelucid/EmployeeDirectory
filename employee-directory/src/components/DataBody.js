import React from "react";
import "../styles/DataBody.css";


function DataBody(props) {
    console.log(props);
    return (
        <tbody>
           {props.employees.map(employee =>(
                <tr>
                <td key={employee.id}> <img alt={employee.name} src={employee.picture.thumbnail}></img></td>
                <td>{employee.name.first}{" "}{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date}</td>

            </tr>
            ))}
        </tbody>
    )
}
export default DataBody;