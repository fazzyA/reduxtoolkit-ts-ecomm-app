import React from 'react';
import { Item } from './Item';
import { data } from '../../store/state';
// import './style.css'

export const ProductList = () => {

  return (
    <>
    <div className='row-left'>
// cart tobe implemented herr
    </div>
    <div className='t-list row-right'>
      {
        data.map(item => (
          <Item name={item.name} price={item.price} pic={item.pic} id={item.id} key={`${item.id}:${item.name}`} />
        ))
      }
    </div>
    </>
  )
}