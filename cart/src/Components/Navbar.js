import React, { Component } from 'react';
import './Navbar.css'
import CartItem from './CartItem'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state ={
            show: false,
            value: 'USD',
            showCart: false
        }
    }

    showModal = () => {
        this.setState(({show})=> ({
            show: !show
        }))
    }

    showCartM = () => {
        this.setState(({showCart})=> ({
            showCart: !showCart
        }))
    }

    changeValueUSD = () => {
        this.setState(({value})=> ({
            value: 'USD'
        }))
    }

    changeValueGBD = () => {
        this.setState(({value})=> ({
            value: 'GBD'
        }))
    }

    changeValueUAH = () => {
        this.setState(({value})=> ({
            value: 'UAH'
        }))
    }


    render() {
        const { inCart, count } = this.props;
        const { show, value, showCart } = this.state;

        let className = "modal"
        if(show === false) {
            className = 'modal hide'
        }
        if(show === true) {
            className = 'modal show'
        }

        
        
        const cartItem = inCart.map(item=> {
            const { id,...itemProps } = item;
            
            return (
                <CartItem key={id} {...itemProps} showCart={showCart}/>
            )
        })

        return (
            <div value={value}>
               <nav className='main-nav-container'>
                   <div className="nav_box">

                        <div className='my_shop'>My Shop</div>

                        <div className="categories">
                            <p className="category-item">Apple</p>
                            <p className="category-item">Sony</p>
                            <p className="category-item">Micresoft</p>
                        </div>

                        <div className="cart">
                            <div className='curency-item' onClick={this.showModal}>$
                            <div className={className}>
                                <ul className='modal-holder'>
                                    <span className="closeBtn" onClick={this.hideModal}>x</span>
                                    <li className="modal-item"><button onClick={this.changeValueUAH}>UAH</button></li>
                                    <li className="modal-item"><button onClick={this.changeValueGBD}>GBD</button></li>
                                    <li className="modal-item"><button onClick={this.changeValueUSD}>USD</button></li>
                                </ul>
                            </div>
                            </div>
                            <div className='cart-item' onClick={this.showCartM}>Cart
                            <div className="cart-modal">
                                {cartItem}
                            </div>
                            </div>
                            <span className='cart-count'>{count}</span>
                        </div>
                   </div>
               </nav>
            </div>
        );
    }
}

export default Navbar;