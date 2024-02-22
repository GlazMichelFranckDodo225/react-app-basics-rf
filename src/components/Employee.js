import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "Roland",
            lastName: "Guichard",
            email: "rolandguichard@gmail.com"
        }
    }

    updateEmployee() {
        this.setState({
            firstName: "Morgan Roland",
            lastName: "Guichard",
            email: "morganrolandguichard@gmail.com"
        })
    }

    render() {
        return (
            <div>
                <h1>Employee Details</h1>
                <p>FirstName : {this.state.firstName}</p>
                <p>LastName : {this.state.lastName}</p>
                <p>Email : {this.state.email}</p>

                <button type="submit" onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        );
    }
}

export default Employee;