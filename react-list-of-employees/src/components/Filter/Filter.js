import { Component } from 'react';
import './Filter.css'

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        }


    }
    render()  {
        const { onFilterSelect } = this.props;

        const buttonsData = [
            {name: 'all', label: "All employees"},
            {name: 'rise', label: "Extra rewarded"},
            {name: 'moreThanThousand', label: "Salary more than 1000$"},
        ];

        const buttons = buttonsData.map(({name, label}) => {
            
            return (
                <button 
                className='btn btn-outline'
                type="button"
                key={name}
                onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="button-group">
                {buttons}
            </div>
        )
    }
   
}

export default Filter;