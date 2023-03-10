import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div className='orders'>
        <div className="orderDiv">
            <div className="orderTop">
            <h3 className="cardItemsName">Nike for men</h3>
            <img src="../uploads/nike3.jpg" alt=""  className="sliderImage" />
            <span className="cartItemsPrice">$75.00</span>
            <span className="cartItemsPrice">amount: 1 </span>
            <span className="cartItemsPrice">Total price amount: $75.00 </span>
            </div>
        </div>
    </div>
  )
}

export default Orders