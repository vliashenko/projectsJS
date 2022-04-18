import './EmployeeAddForm.css'

export const EmployeeAddForm = () => {
    return (
        <div className="app-add-form">
            <h5>Add now employee</h5>
            <form 
            className="add-form">
                <input type="text" className="new-post" placeholder="Type an employee name" />
                <input type="number" className="new-post" placeholder="Salary in $" />
                <button type="submit" className="btn">Add</button>
            </form>
        </div>
    )
}