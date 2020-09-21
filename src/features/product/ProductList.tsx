import React from 'react';
import { Item } from './Item';
import { data } from '../../store/state';
import { Cart } from '../cart/Cart';
import CartItems from '../cart/CartItem';
// import './style.css'
var uniqid = require('uniqid');

export const ProductList = () => {

  return (
    <>
    <div className='row-left'>
      <Cart />
    </div>
    <div className='t-list row-right'>
      {
        data.map(item => (
          <Item name={item.name} price={item.price} pic={item.pic} id={item.id} key={uniqid()}/>
        ))
      }
    </div>
    </>
  )
}