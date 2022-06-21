import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    // const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for(let i=0; i<cart.length; i++) {  
        const product=cart[i];
        total=total+product.price;
    }
  let shipping=0;
  if(total>35){
     shipping=0;
  }
  else if(total>15 && total<35){
    shipping=4.99;
  }
  else if(total>0&& total<15){
    shipping=12.99;
  }
  const tax=Math.round(total/10);

  const formatNumber = num =>{
    const precision=num.toFixed(2);  
    return Number(precision);
  }
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Total price:{formatNumber(total)}</p>
            <p><small>shipping cost:{shipping}</small></p>
            <p><small>Tax+VAT : {tax}</small></p>
            <p>Total price:{formatNumber(total+shipping)}</p>
        </div>
    );
};

export default Cart;