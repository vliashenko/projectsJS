import React, { Component } from 'react';
import './CartItem.css'

class CartItem extends Component {
    constructor(props){
        super(props);

        
    }

   
    render() {

        const { brand, name, price, gallery, id, showCart } = this.props

        let classOnChange = "cart-item-holder"
        if(showCart === false) {
            classOnChange = "cart-item-holder hide" 
        }
        if(showCart === true) {
            classOnChange = "cart-item-holder show" 
        }

        return (
            <div className={classOnChange}>

                

                <div className="cart-image-holder">
                    <img src={gallery}alt="" className="cart-image" />
                </div>

                <div className="cart-item-info">
                    <p className="item-brand">
                        {brand}
                    </p>

                    <p className="item-name">
                        {name}
                    </p>

                    <p className="item-price">
                    {price}
                    </p>

                    <p className="item-id">
                    {id}
                    </p>
                </div>

                <div className="cart-item-count">
                    <p></p>
                </div>
            </div>
        );
    }
}

export default CartItem;