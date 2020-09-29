import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className = "checkout" >
            <div className = "checkout__ad">
            <h2 className = "checkout__title" >
                    Your shopping Basket
                </h2>
            </div>
            <div>
          

                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}

            </div>
            <div className ="checkout__right">
                <Subtotal />
                <h2>The subtotal will go here</h2>
  
            </div>
        </div>
    )
}

export default Checkout
