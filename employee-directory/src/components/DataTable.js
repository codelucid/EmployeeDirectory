import React from "react";
import DataBody from "./DataBody.js";
import "../styles/DataTable.css";


// thead
function DataTable({ employees, handleSort}) {
    return (
        <table className="table">
        <thead className="thead-dark">
             <tr>
                 <th scope="col">Image</th>
                 <th onClick={() => handleSort()} scope="col">Name</th>
                 <th scope="col">Phone</th>
                 <th scope="col">Email</th>
                 <th scope="col">DOB</th>
             </tr>
         </thead>
        <DataBody employees={employees}/>
        </table>
    );
}

export default DataTable;