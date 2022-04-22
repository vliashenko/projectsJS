import  EmployeesListItem from '../EmployeesListItem/EmployeesListItem'

export const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const addEmployee = data.map(item => {
        const {id, ...itemProps} = item;
        return (
        <EmployeesListItem 
        key={id}  
        {...itemProps}
        onDelete={()=> onDelete(id)}
        onToggleProp={e => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) }/>    
    )
    })

    return (
        <ul className="list-group">
            {addEmployee}
        </ul>
    )
}