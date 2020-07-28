import React, { Component } from "react";
import Nav from "./Nav";
import DataTable from "./DataTable";
import API from "../utils/API";
import "../styles/DataArea.css";

export default class DataArea extends Component {

    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        error: ""
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.search()
            .then(res => {
                this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
            })
            .catch(err => console.log(err));
    };

    handleSearchChange = event => {
        // From this.state.employees and event.target.value, generate filteredEmployees
        // Save it with setState into this.state.filteredEmployees
        let filteredEmployees = event.target.filteredEmployees
        this.setState({ search: event.target.value, filteredEmployees: filteredEmployees });
    }
    // handleSearchChange = event => {
    //     const {name, value} = event.target;
    //     this.setState({[name]: value});
    // }

    handleSort = event => {
         
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    
    
    // handleSort = event => {
    //     const employees = this.state.employees.filter(name => !name.name);
    //     this.setState({ employees });
    // };
    
    // handleSort = function (a, b){ 
    
    //     const sorting = this.state.employees.filter(employee => a.employee.name.toLowerCase().localeCompare(b.employee.name.toLowerCase())
    // }
        
        // this.setState({
        //     employees: results.data.results,
        //     filteredEmployees: results.data.results
        // });
    
        // handleSubmit(event) => {

        // }

    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <DataTable
                        employees={this.state.filteredEmployees}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );

    }
}

