import React from 'react'

const CartItems = () => {
  return (
    <div className='cartItems'>
        <div className="cartItemsDiv">
            <h3 className="cartItemsTitle">Your Cart : (2 items)</h3>
            <div className="cartItemsGroups">
                <div className="cardItemsLeft">
                    <table>
                        <thead>
                            <tr>
                               
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                            <td className='cardItemDelete'>x</td>
                                <td><img src="../uploads/nike3.jpg" alt=""  className="sliderImage" /></td>
                                <td>
                                    <h3 className="cardItemsName">Nike for men</h3>
                                </td>
                                <td>
                                    <span className="cartItemsPrice">$75.00</span>
                                </td>
                                <td>
                                    <div className="cartItemsQuantity">
                                            <div className="productQuantityRight">
                                                    <input type="button" value='-' className='minus'  />
                                                    <input type="number" min="1" step="1" value='1' className='value' />
                                                    <input type="button" value='+' className='plus' />
                                             </div>
                                    </div>
                             </td>
                                <td>
                                    <h4 className="cartItemsPriceSubtotal"></h4>
                                </td>
                            </tr>
                            <tr>
                            <td className='cardItemDelete'>x</td>

                                <td><img src="../uploads/nike3.jpg" alt=""  className="sliderImage" /></td>
                                <td>
                                    <h3 className="cardItemsName">Nike for men</h3>
                                </td>
                                <td>
                                    <span className="cartItemsPrice">$75.00</span>
                                </td>
                                <td>
                                    <div className="cartItemsQuantity">
                                            <div className="productQuantityRight">
                                                    <input type="button" value='-' className='minus' />
                                                    <input type="number" min="1" step="1" value='1' className='value' />
                                                    <input type="button" value='+' className='plus' />
                                             </div>
                                    </div>
                             </td>
                                <td>
                                    <h4 className="cartItemsPriceSubtotal"></h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cartItemsRight">
                    <div className="cartItemsRightDiv">
                        <h3 className="cartItemsRightTitle">Cart Totals</h3>
                        <div className="cartItemsRightContent">
                            <div className="carItemsRightContentLeft">
                                <span>Subtotal:</span>
                            </div>
                            <div className="carItemsRightContentRight">
                                <span>$150</span>
                            </div>                    
                        </div>
                        
                        <div className="cartItemsRightContent">
                            <div className="carItemsRightContentLeft">
                                <span>Shipping:</span>
                            </div>
                            <div className="carItemsRightContentRight">
                                <span>$10</span>
                            </div>                    
                        </div>

                        <div className="cartItemsRightContent">
                            <div className="carItemsRightContentLeft">
                                <span>Total:</span>
                            </div>
                            <div className="carItemsRightContentRight">
                                <span>$160</span>
                            </div>                    
                        </div>
                    <button className='checkout'>Proceed do Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CartItems