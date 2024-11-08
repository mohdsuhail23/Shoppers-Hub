// ShoppingCart.js
import React from 'react';
import './ShoppingCart.css';
import  {useSelector, useDispatch} from 'react-redux';
import {incQuantity, decQuantity,removeItem}  from '../redux/features/CartSlice'
import { Button } from '@mui/material';

import emt from '../assets/cart.gif'
import { NavLink } from 'react-router-dom';
function Cart(){
//   const items = [
//     { id: 1, name: 'Product 1', price: 25, quantity: 1, image: 'https://via.placeholder.com/100' },
    
//   ];

const{cart, totalQuantity, totalPrice}= useSelector((state)=>state.allCarts);
const dispatch= useDispatch();

  return (
    <>
    { totalQuantity>0?  <div className="shopping-cart container mx-auto md-w-100" >
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((data) => (
          <div key={data.id} className="cart-item">
            <img src={data.thumbnail} alt={data.title} className="item-image" />
            <div className="item-info">
              <h3 className="item-name">{data.title}</h3>
              <p className="item-price">{data.price}</p>
              <p className="item-quantity">Quantity: <strong>{data.quantity}</strong> </p>
            </div>
            <div className="item-actions">
              <Button  sx={{color:"black", fontSize:"1.25rem"}} onClick={()=>dispatch(incQuantity(data.id))} >+</Button>
              <Button sx={{color:"black", fontSize:"1.25rem"}}  onClick={()=>dispatch(decQuantity(data.id))}>-</Button>
              <Button variant='contained' sx={{
        backgroundColor: '#c9250c',
        color:"white",
        '&:hover': {
          backgroundColor: '#b01f09', 
          color:"white"
        },
      }}  onClick={()=>dispatch(removeItem(data.id))} >Remove</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div> 
    </div> :
    <div className='grid place-item-center' >
    <div className=" d-flex justify-content-center align-items-center ">
        <div  className='d-flex align-items-center justify-content-center  p-3  border border-secondar' style={{width:"40rem"}}>
            <h1>Your Cart Is Empty</h1>
            <img src={emt} alt="cart" style={{width:"150px" , height:"150px"}} / >
        </div>
       
    </div>
    
    <NavLink to='/'  className="d-flex justify-content-center align-items-center" style={{textDecoration:"none"}}>
        
        {/* <Button variant="outlined">Go To Home</Button> */}
        <Button
      variant="contained"
      color="primary"
      sx={{
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'black', 
         
        },
      }}
    >
      Visit Shop
    </Button>
        
        
        </NavLink>
    </div>
    
    }
    </>
      
  );

};

export default Cart;
