import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { MIND_API } from './Constants';

function MindResturant() {
    const { resId } = useParams();
    console.log(resId);
 
    const [data,setData]=useState([]);
    const [alldata,setallData]=useState([])
    const [isOpen,setOpen]=useState(false)
    useEffect(() => {
        fetchMind();
    }, []);

    async function fetchMind() {
       
        const response = await fetch(`${MIND_API}${resId}`+"&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await response.json();
         setData([json?.data?.cards])
          // Set initial restaurant data
        const datas = json?.data?.cards?.slice(4)?.map(restaurant => restaurant);
        setallData(datas);

    }


    const handleItemClick = (id) => {
        console.log(id)
        if (id === "costForTwo") {
            console.log("Functionality for low ratings or other conditions");
        } else if (id === "isVeg") {
            console.log("Functionality for low ratings or other conditions");
        } else if (id === "rating") {
            const top = data[0]?.slice(4)?.filter((r) => 
                r?.card?.card?.info?.avgRating > 4.2
            );
            setallData(top);
        } else if (id === "deliveryTime") {  // Ensure a unique condition
            console.log("Functionality for low ratings or other conditions");
        }
    };
    
 

      

    return (
        <div>
            <div>
                <h1 className='m-4 p-4 font-bold text-3xl'>{data[0]?.[0]?.card?.card?.title}</h1>
                <p className='m-7  '>{data[0]?.[0]?.card?.card?.description}</p>
            </div>

            <div className='m-4 p-4 flex'>
                <button  className='m-4 p-2 border text-black font-semibold border-black border-solid rounded-xl hover:bg-slate-300' onClick={()=>setOpen(true)}>Filter</button>
                <button  className='m-4 p-2 border text-black  font-semibold border-black border-solid rounded-xl hover:bg-slate-300'>Sort by</button>
                <button  className='m-4 p-2 border text-black font-semibold border-black border-solid rounded-xl hover:bg-slate-300'>10 Mins Delivery</button>

            </div>
            {isOpen && (
                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                     <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <div className='flex justify-between'>
                            <h1 className="text-xl font-bold">Filter</h1>
                            <button onClick={() => setOpen(false)} className="  bg-white text-black rounded-full px-2 " >  X </button>
                        </div>
                       
                        <ul className="mt-4 space-y-2">
                             {
                                 data[0]?.[1]?.card.card.facetList.map((filter) => (
                                     <li key={filter?.id} className="p-2 bg-gray-200 rounded"><button onClick={()=>handleItemClick(filter?.id)}>{filter?.label}</button></li>
                                    ))}
                        </ul>
                    
                </div>
            </div>)}
           {/*<RestaurantCard  />*/}
          
           <div className="flex flex-wrap rounded-lg">
        
        {alldata?.map((restaurant,index) => {
           restaurant=restaurant?.card.card?.info;
           {console.log(restaurant)}
           return(
      
          <Link key={restaurant?.id } to={"/resturants/"+restaurant?.id } >  <RestaurantCard {...restaurant} key={index} /></Link>
       )})}
       </div>
           


</div>



    )
}

export default MindResturant;
