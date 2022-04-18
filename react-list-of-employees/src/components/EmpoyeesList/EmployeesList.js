import {EmployeesListItem} from '../EmployeesListItem/EmployeesListItem'

export const EmployeesList = ({data}) => {

    const addEmployee = data.map(item => {
        const {id, ...itemProps} = item;
        return (
          <EmployeesListItem key={id}  {...itemProps}/>  
        )
    })

    return (
        <ul className="list-group">
            {addEmployee}
        </ul>
    )
}