import React from 'react'
import { CDN_URL } from './Constants';
import { useDispatch } from 'react-redux';

import {addItem,removeItem} from "./cartSlice"; 


function ItemLists({data}) {
    const dispatch=useDispatch()
    function handleaddcart(item){
        dispatch(addItem(item))
    }
    function handleremoveItem(item){
        dispatch(removeItem(item))
    }
  
  return (
    <div>
        {data?.map((item)=>(
            <div key={item?.card?.info?.id} className='p-4 m-4 border-b-4 flex justify-between '>
                <div className='w-9/12'>
                    <div>
                        <span className='py-4 font-bold'>{item?.card?.info?.name}</span>
                        <span className='p-4 m-4 text-gray-400'>₹-{item?.card?.info?.price? item?.card?.info?.price/100: item?.card?.info?.defaultprice} </span>
                   </div>
                   <p>{item?.card?.info.description}</p>
                </div>
                <div className='w-3/12 p-4'>
                    <div>
                        <button className='bg-black text-white  p-1 m-2 rounded-lg font-semibold' onClick={()=>handleremoveItem(item)} >-</button>
                        <button className='bg-black text-white  p-1 m-2 rounded-lg font-semibold' >Add</button>
                        <button className='bg-black text-white  p-1 m-2 rounded-lg font-semibold' onClick={()=>handleaddcart(item)}>+</button>
                    </div>
                    <img className='w-full' src={CDN_URL+item?.card?.info?.imageId} alt={item?.card?.info.name} />
                </div>
            </div>
            
        ))

        }

    </div>
  )
}

export default ItemLists
