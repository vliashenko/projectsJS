import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartOpen: false
        }
    }

    setCartOpen = () => {
        this.setState(({cartOpen})=> ({
            cartOpen: !cartOpen
        }))
    }

    render () {
        return (
        <header>
            <div>
                <Link to={"/"}>
                <span className="logo">House Staff</span>
                </Link>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                <i className={`fa fa-shopping-cart ${this.state.cartOpen && 'active'}`} onClick={this.setCartOpen}>
                    <span className="amount">0</span>
                        </i>
                

                {this.state.cartOpen && (
                    <div className='shop-cart'></div>
                )}
            </div>

            <div className="presentation"></div>
        </header>
    );
    }

    
}

export default Header;