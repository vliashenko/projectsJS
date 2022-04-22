import './EmployeesListItem.css'
import { Component } from 'react'



class EmployeesListItem extends Component {
    
    render() {
        const {increase, rise, name, salary, onDelete, onToggleProp} = this.props;

        let classNames = "list-group-item"
        if(increase === true) {
            classNames += ' increase'
        } 
        if (rise === true) {
            classNames += ' like'
        }
        return (
        <li className={classNames}>
            <label>
                {/* <input id="checkbox" className='checkbox' type="checkbox" /> */}
                <span className='employee-name' onClick={onToggleProp} data-toggle="rise">{name}</span>
            </label>
            <div className="input-sum">
                <input type="text" defaultValue={salary + "$"}/>
            </div>
            <div className="icon-container">
                <a href='#/' 
                className="cookie-button"
                onClick={onToggleProp}
                data-toggle="increase">
                    <i className="fa fa-cookie"></i>
                </a>
                <a href='#/' 
                className="trash-button" 
                onClick={onDelete}>
                    <i className="fa fa-trash"></i>
                </a>
                <a href='#/'> 
                    <i className="fa fa-star"></i>
                </a>
            </div>
        </li>
    );
    }
    
}

export default EmployeesListItem;