import './Filter.css'

export const Filter = () => {
    return (
        <div className="button-group">
            <button 
            className='btn'
            type="button">
                All employees
            </button>
            <button 
            className='btn btn-outline'
            type="button">
                Extra rewarded
            </button>
            <button 
            className='btn btn-outline'
            type="button">
                Salary more than 1000$
            </button>
        </div>
    )
}