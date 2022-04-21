import  EmployeesListItem from '../EmployeesListItem/EmployeesListItem'

export const EmployeesList = ({data, onDelete}) => {

    const addEmployee = data.map(item => {
        const {id, ...itemProps} = item;
        return (
          <EmployeesListItem 
          key={id}  
          {...itemProps}
          onDelete={()=> onDelete(id)}/>  
        )
    })

    return (
        <ul className="list-group">
            {addEmployee}
        </ul>
    )
}