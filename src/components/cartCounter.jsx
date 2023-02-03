import React, { Component } from 'react';
import ShopCart from './shopCart';

export default class CartCounter extends Component {

    
    render() {
        console.log('CartCounter - Rendered');
        const { onReset, onIncrement, onDelete, counters } = this.props;
        return (
            <div>
               
                {counters.map(shopcart =>
                    <ShopCart
                        key={shopcart.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        // id= { shopcart.id }
                        //value = { shopcart.value }
                        // selected = { true} 
                        shopcart={ shopcart }
                    >
                        <h4>Item #{shopcart.id}</h4>
                    </ShopCart>
                )} 
                <button onClick={ onReset } className="btn btn-primary btn-sm m-2">Reset</button>
            </div>)

    }
}