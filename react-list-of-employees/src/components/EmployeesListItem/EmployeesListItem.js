import './EmployeesListItem.css'

export const EmployeesListItem = ({name, salary, increase}) => {

    let classNames = "list-group-item"
    if(increase === true) {
        classNames += ' increase'
    }
    
    return (
        <li className={classNames}>
            <label>
                <input id="checkbox" className='checkbox' type="checkbox" />
                <span className='employee-name'>{name}</span>
            </label>
            <div className="input-sum">
                <input type="text" defaultValue={salary + "$"}/>
            </div>
            <div className="icon-container">
                <a href='/' className="cookie-button">
                    <i className="fa fa-cookie"></i>
                </a>
                <a href='/' className="trash-button">
                    <i className={"fa fa-trash"}></i>
                </a>
                <a href='/'> 
                    <i className="fa fa-star"></i>
                </a>
            </div>
        </li>
    );
}