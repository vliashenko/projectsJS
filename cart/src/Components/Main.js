import React, { Component } from 'react';
import Card from './Card';
import './Main.css'



class Main extends Component {
    constructor(props){
        super(props);


    }
    render() {

    const { data, addItem } = this.props  

    let element = data.map((item)=> {
                const {id, name, brand, prices, gallery, ...itemProps} = item;
               return <Card 
               key={item.id} 
               prices={item.prices} 
               gallery={item.gallery}
               {...itemProps}
               addItem={() =>addItem(id,name, brand, prices[0].amount, gallery)} />
            })

    return (
        <div className='flexed'>
            {element}
        </div>
    );
    }
}

export default Main;

