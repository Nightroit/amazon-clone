import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { ShoppingBasket } from '@material-ui/icons'

function Subtotal({value}) {
    return (
        <div>
            <div className = "subtotal">
                <CurrencyFormat 
                    renderText = {(value) =>(
                        <>
                            <p>
                                Subtotal (0 items): <strong>{` ${value}`}
                                </strong>
                            </p>
                            <small className = "subtotal__gift">
                                <input type = "checkbox" />This order 
                                contain a gift
                            </small>
                        </>
                    )}
                    decimalScale = {2}
                    value = {value}
                    displayType = {"text"}
                    thousandSeparator = {true}
                    prefix = {"$"}
                />
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
