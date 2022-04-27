import { Component } from 'react';
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state ={
      term: ""
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
        <div className="row">
        <div className="input-field ">
          <input 
          placeholder='Find emplyee' 
          type="text" 
          className="search-input"
          value={this.state.term}
          onChange={this.onUpdateSearch}/>
        </div>
      </div>
    )
  }
    
}

export default Search;