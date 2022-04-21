import './App.css'
import {Info} from '../Info/Info.js'
import {Search} from '../Search/Search'
import {Filter} from '../Filter/Filter'
import {EmployeesList} from '../EmpoyeesList/EmployeesList'
import EmployeeAddForm from '../EmployeesAddForm/EmployeeAddForm'

function App() {

  const data = [
    {name: 'John C.',salary: 800, increase: true, id: 1 },
    {name: 'Alex M.',salary: 1600, increase: false, id: 2},
    {name: 'Slava L.',salary: 5000, increase: false, id: 3},
  ];

  return (

  <div className="app">
    <Info/>
  
    <div className="search-panel">
      <Search/>
      <Filter/>
    </div>

    <div className="employee-list">
      <EmployeesList data={data} onDelete={id => console.log(id)}/>
    </div>

    <div className="add-form">
      <EmployeeAddForm/>
    </div>
  </div>

  );

}

export default App;
