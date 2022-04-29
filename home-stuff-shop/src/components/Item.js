import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Item extends Component {   
    render() {
        const { item, onClickHandler } = this.props;
        const { img, title, desc, price, id } = item;
        return (
            <div className='item' onClick={() =>onClickHandler(id)}>
            <Link to='/product'>
                <img src={this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price} USD</b>
            </Link>
                <div className='add-to-cart'>+</div>
            </div>  
        );
    }
}

export default Item;