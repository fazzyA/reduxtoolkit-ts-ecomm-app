import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "./cartSlice";
import { CartItem,ProductItem } from "../../global"

 const CartItems = () => {
       // @ts-ignore

  const myCartItem:CartItem[] = useSelector((state:CartItem[]) => state.cart);
  console.log(myCartItem)
  const dispatch = useDispatch();

  
      // const prices = cart.map(item => item.price);
      // const totalPrice =  cart.reduce((prev, next) => prev + next.price,0); 
      // console.log(totalPrice)

  //     const delItem = (id) =>{
  //   let newCart=cart.filter((item)=>item.id!=id);
  //   console.log(newCart)
  //   //setCart([...newCart])
  //  dispatch(removeItem(id));
  //   } 
  return (
    <div className='cart-box'>
      <h3>Your Items</h3>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>price</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
        {myCartItem.map((item,index)=>{
            return (
              <tr key={item.cartId} className='item-row'>
                <td className='product'>{item.name}</td>
                <td>{item.price}</td>
                <td><button 
                // onClick={()=>{delItem(item.id)}}
                onClick={() => dispatch(removeItem({ cartId: item.cartId }))}
                >
                  x
                </button></td>
                </tr>)
        })
        }
       {/* <tr className='sub-total'> <th>Total: </th>{totalPrice}</tr> */}
        </tbody></table>
    </div>
  )
}
export default CartItems;