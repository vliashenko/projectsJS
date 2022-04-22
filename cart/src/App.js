import Navbar from './Components/Navbar';
import Main from './Components/Main';
import './App.css';
import { Component } from 'react';
import data from './data';


let goods;

data.categories.map(product => {
return goods = product})

const productsItems = goods.products; 


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: productsItems,
      inCart: []
    }

  }

  addItem = (id, name, brand, price, gallery) => {
    console.log(`added to cart - ${id}, ${name}, ${brand}, ${price}, ${gallery}`);
    const itemInCart = {
      brand,
      name,
      price,
      id,
      gallery
    }

    this.setState(({inCart})=> {
      const newArr = [...inCart, itemInCart];
      return {
        inCart: newArr
      };
    })
  }

  
render() {

  const count = this.state.inCart.length

  return (
    <div>

    <Navbar 
    data ={this.state.data} 
    inCart={this.state.inCart}
    count={count}/>

    <Main data ={this.state.data} addItem={this.addItem}/>
    
    </div>
  );
}
  
}

export default App;
