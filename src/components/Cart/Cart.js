import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total=cart.reduce((total,prd)=>total+prd.price,0);
   // const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
    let shipping=0;
    if(total>35) shipping=0;
    else if(total>15) shipping=4.99;
    else if(total==0) shipping=0;
    else shipping=12.99;

    const tax= (total*0.01).toFixed(2);
    const sum=Number((total+shipping+Number(tax)).toFixed(2));
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total Price:{sum}</p>
            <button className="reviewOrderBtn">Review your Order</button>
        </div>
    );
};

export default Cart;