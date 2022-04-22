import React, { Component } from 'react';
import './Cards.css'

class Card extends Component {
    constructor(props){
        super(props);

        

    }

    render() {
        const { name, brand, gallery, inStock, prices, addItem } = this.props;

        let className = "cards"
        if(inStock === false){
            className += " out-of-stock"
        }

        const currentPrice = prices[0].amount

        return (
               <div className={className}>
                   
                   <div className="image_box">
                       <img src={gallery} alt="" />
                   </div>

                   <div className="detailes">
                       <p>{brand}</p>
                       <p>{name}</p>
                       <p>{currentPrice} USD</p>
                       <button 
                       disabled={inStock === false? 1 : 0}
                       onClick={addItem}>Add to Cart</button>
                   </div>
               </div>
            
        );
    }
}

export default Card;





