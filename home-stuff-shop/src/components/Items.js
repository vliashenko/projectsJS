import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
    render() {
        const { onClickHandler, items, filteredArr, filterHandler } = this.props;
        
        return (
            <div>
                <div className="category">
                   {this.props.categories.map((el, i)=> {
                    return <div key={i} onClick={()=> filterHandler(el)}>{el}</div>
                })} 
                </div>
                
            <main>
                {filteredArr.length === 0?items.map(el => (   
                    <Item 
                    item={el} 
                    key={el.id}
                    onClickHandler={onClickHandler}
                    />
                )) :
                filteredArr.map(el => (   
                    <Item 
                    item={el} 
                    key={el.id}
                    onClickHandler={onClickHandler}
                    />
                ))
                }
            </main>
            </div>
        );
    }
}

export default Items;