import React, { Component } from 'react';


class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            chosenColor: ""
        }
    }

    chosenColorHandler = (e) => {
        if(e.target.className === '') {
           e.target.className = 'checked' 
        } else {
            e.target.className = '' 
        }

        if(e.target.className === 'checked') {
           this.setState(({chosenColor}) => ({
            chosenColor: e.target.style.background
        })) 
        } else {
            this.setState(({chosenColor}) => ({
                chosenColor: ""
            })) 
        }
    }
  
    render() {
              
        const { item } = this.props;
        const [ { title, img, price, desc, attributes } ] = item;
        const { color } = attributes;

        return (
            <div className='product-page'>
                <div className="product-image-container">
                    <img src={img} alt={title}/>
                </div>

                <div className="product-item-desc">
                <h2>{title}</h2>
                <p className='description'>{desc}</p>
                <p className='price'>Price: </p>
                <b>{price} USD</b>
                <div className="atrributes">
                    {color.map((el, i) => {
                        return <div key={i+30}  onClick={this.chosenColorHandler} style={{background: el}}></div>
                    })}
                </div>
                <div className="btn-container">
                   <div>Додати до кошика</div> 
                </div>
                
                </div>

            </div>
        );
    }
}

export default Product;