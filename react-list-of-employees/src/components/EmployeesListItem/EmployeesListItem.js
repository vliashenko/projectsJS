import './EmployeesListItem.css'
import { Component } from 'react'



class EmployeesListItem extends Component {
constructor(props){
    super(props);

    this.state = {
        increase: false,
        like: false
    }
}

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    
    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let classNames = "list-group-item"
        if(increase === true) {
            classNames += ' increase'
        } 
        if (like === true) {
            classNames += ' like'
        }
        return (
        <li className={classNames}>
            <label>
                <input id="checkbox" className='checkbox' type="checkbox" />
                <span className='employee-name' onClick={this.onLike}>{name}</span>
            </label>
            <div className="input-sum">
                <input type="text" defaultValue={salary + "$"}/>
            </div>
            <div className="icon-container">
                <a href='#/' 
                className="cookie-button"
                onClick={this.onIncrease}>
                    <i className="fa fa-cookie"></i>
                </a>
                <a href='#/' className="trash-button" onClick={onDelete}>
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