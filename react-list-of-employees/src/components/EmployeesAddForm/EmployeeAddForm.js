import { Component } from 'react'
import './EmployeeAddForm.css'

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    render() {
        const { name, salary } = this.state;
        return (
        <div className="app-add-form">
            <h5>Add now employee</h5>
            <form 
            className="add-form">
                <input type="text" 
                className="new-post" 
                onChange={this.onValueChange} 
                name="name" 
                value={name}
                placeholder="Type an employee name" />
                <input type="number" 
                className="new-post" 
                onChange={this.onValueChange} 
                name="salary"
                value={salary} 
                placeholder="Salary in $" />
                <button type="submit" className="btn">Add</button>
            </form>
        </div>
        )
    }
    
}

export default EmployeeAddForm