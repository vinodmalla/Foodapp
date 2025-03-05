import React, {  useState } from 'react';

import ResturantCatagories from './ResturantCatagories';


import useRestaurantMenu from './useRestaurantMenu';
 
export default function ResturantsMenu() {
   
    const [value,setValue]=useState("");
    const [filtered,setFiltered]=useState([])
    const resInfo=useRestaurantMenu();
    const [showdata,setShowdata]=useState(null)

    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const {
        name = "Restaurant Name Not Available",
        cuisines = [],
        costForTwoMessage = "Cost Info Not Available",
    } = restaurantInfo;

    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    const catagories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
   

    function FilterData(){
        if(value===""){
            setFiltered(filtered)
        }
        else{
            const fitered=itemCards?.filter((item)=>item?.card?.info?.name.toLowerCase().includes(value.toLowerCase()))
            setFiltered(fitered)
        }
    }
    return (
        <div className='text-center'>
            <h1 className='p-4 m-2 font-bold '>{name}</h1>
            <p className='p-2 m-2'>{cuisines.join(", ")} - {costForTwoMessage}</p>
            
            <h2 className='p-4 m-4 font-bold'>{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.title}</h2>
            <input className='px-4 items-center m-4 border border-solid border-black' placeholder='search resturant' value={value} onChange={(e)=>setValue(e.target.value)} />
            <button className=' px-4 py-1 rounded-xl bg-blue-300 hover:bg-blue-400 font-semibold' onClick={FilterData}>Search</button>
            <div>
                {catagories?.map((e,index)=>
                <ResturantCatagories data={e?.card?.card} key={e?.card?.card?.title} showdata={showdata===index ? true:false }  setShowdata={()=>setShowdata(index)}/>
                )}
            </div>
        </div>
    );
}
