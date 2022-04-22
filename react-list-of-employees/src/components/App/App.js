import { Component } from 'react'
import './App.css'
import {Info} from '../Info/Info.js'
import {Search} from '../Search/Search'
import {Filter} from '../Filter/Filter'
import {EmployeesList} from '../EmpoyeesList/EmployeesList'
import EmployeeAddForm from '../EmployeesAddForm/EmployeeAddForm'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'John C.',salary: 800, increase: true, rise: true,  id: 1 },
        {name: 'Alex M.',salary: 1600, increase: false, rise: false,  id: 2},
        {name: 'Slava L.',salary: 5000, increase: false, rise: false,  id: 3},
      ]
      
    }

    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data})=> {
      // const index = data.findIndex( (elem) => elem.id === id );      
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      const newArr = data.filter( (elem) => elem.id !== id)
      
      return {
        data: newArr
      }

    })
  }

  addItem = (name, salary) => {
    const newItem =  {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({data})=> {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    })
  }

  // onToggleIncrease = (id) => {
    // this.setState(({data})=> {
      // const index = data.findIndex(elem => elem.id === id);

      // const old = data[index];
      // const newItem = {...old, increase: !old.increase}
      // const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)]
    
      // return {
      //   data: newArr
      // }
    // })

  //   this.setState(({data})=> ({
  //     data: data.map(item => {
  //       if(item.id === id) {
  //         return {...item, increase: !item.increase}
  //       }
  //       return item
  //     })
  //   }))
  // }

  // onToggleRise = (id) => {
  //   this.setState(({data})=>({
  //     data: data.map(item => {
  //       if(item.id === id) {
  //         return { ...item, rise: !item.rise}
  //       }
  //       return item
  //     })
  //   }))
  // }

  onToggleProp = (id, prop) => {
    this.setState(({data})=>({
      data: data.map(item => {
        if(item.id === id) {
          return { ...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }
  
  render() {

    const employees = this.state.data.length;
    const increased = this.state.data.filter(elem => elem.increase === true).length
    const rewarded = this.state.data.filter(elem => elem.rise === true).length

  return (

    <div className="app">
      <Info employees={employees} increased={increased} rewarded={rewarded}/>
    
      <div className="search-panel">
        <Search/>
        <Filter/>
      </div>
  
      <div className="employee-list">
        <EmployeesList 
        data={this.state.data} 
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
        />
      </div>
  
      <div className="add-form">
        <EmployeeAddForm  addItem={this.addItem}/>
      </div>
    </div>
  
  );
}
  

}

export default App;
