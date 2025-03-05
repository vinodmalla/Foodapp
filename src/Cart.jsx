import React from 'react'
import ItemLists from './ItemLists'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearItem } from './cartSlice'
import { Link } from 'react-router-dom'
function Cart() {
    const cartslength=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    function handleclear(){
        dispatch(clearItem())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl'>Your Cart</h1>
        <button className='bg-black text-white rounded-md p-2 m-2 text-lg' onClick={handleclear}>Clear cart</button>
        {
            cartslength.length===0 && <div className='p-4 m-4'><h1 className='p-4'>your cart is empty</h1>
            <button className='bg-black text-white rounded-md p-2 m-2 text-lg'><Link to="/">Browse Products</Link></button></div>
        }
        <div className='w-6/12 m-auto'>
            <ItemLists data={cartslength} />

        </div>
        
      
    </div>
  )
}

export default Cart
