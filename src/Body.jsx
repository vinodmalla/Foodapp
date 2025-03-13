import React from "react";

import useOnlineStatus from "./useOnlineStatus";
import { useState,useEffect,useContext } from 'react';
import RestaurantCard,{withLabelPromotes} from "./RestaurantCard";
//import { ShimmerPostList } from "react-shimmer-effects";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CDN_URL } from "./Constants";
import userContent from "./userContent";

export default function Body() {
  const onlineStatus=useOnlineStatus()
  const [value, setValue] = useState("");
  const [allresturants,setallresturans]=useState([])
  const [filtersearch, setFilter] = useState([]);
  const [item,setItem]=useState([])
  const [alldata,setallData]=useState([])
  const [best,setBest]=useState([])
  const ResturantLabel=withLabelPromotes(RestaurantCard)
  const {loginUser,setUser}=useContext(userContent)

  
  useEffect(() => {
    getResturant();
  }, []);

  async function getResturant() {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setFilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setallresturans(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setItem(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setallData(json?.data.cards[2])
    setBest(json?.data?.cards[6]?.card?.card?.brands)    
  }
  console.log(item)

  
  function filterData() {
    if (value === "") {
      setFilter(filtersearch); 
    } else {
      const filtered = allresturants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(value.toLowerCase())
      );
      setFilter(filtered); 
    }
  
  }
  function topdata(){
    const top=allresturants.filter((r)=>
      r?.info?.avgRating>4.5
    )
    setFilter(top)
  };

  if(value
     && filtersearch?.length===0)return<h1>No Resturant found</h1>
  if(onlineStatus===false)return<p>"Hey amazing human!

  You know what's cooler than a unicorn? YOU! Because unicorns are mythical, but YOUR awesomeness is REAL!
  
  Don't let anyone dull your sparkle. Keep shining, keep grinding, and keep being your fabulous self!
  
  Remember, every great success story started with a single step... or in your case, a single awkward dance move.
  </p>

function getCollectionId(url) {
  const params = new URLSearchParams(url.split('?')[1]);
  return params.get('collection_id'); 
}

  return filtersearch?.length===0?(
    <Shimmer  />
  ):(
    <>
      <div className="p-4 m-4 items-center justify-center">
        <input
          type="text"
          className="border border-solid border-black rounded-sm"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="px-4 py-1 items-center m-4 bg-blue-300 rounded-xl hover:bg-blue-400 font-semibold text-justify" onClick={filterData}>
          Search
        </button>
        <button className="px-4 py-1 items-center m-4 bg-blue-300 rounded-xl hover:bg-blue-400 font-semibold text-justify" onClick={topdata}>
          Top Resturants
        </button>
        <label className="px-4 py-1 items-center m-4">User</label>
        <input className="px-4 py-1 items-centerm-4 border border-black border-solid" value={loginUser} onChange={(e)=>setUser(e.target.value)} />
      </div> 
      <div>
        <h1 className="m-4 p-4 font-bold text-2xl">What's on your mind?</h1>

      </div>
      <div className="flex flex-wrap m-8 p-4">
        <ul className="m-2 p-2 px-2 py-2 flex flex-wrap">
          {Array.isArray(item) && item.length > 0 ? ( item.map((items) => {
            const collectionId = getCollectionId(items?.action?.link);
            return (
              <li key={items?.id}>
                  <Link to={`/resturant/${collectionId}`}>
                    <img className="w-48" src={CDN_URL + items?.imageId} alt={items?.text} />
                  </Link>
              </li>
            );
          })
      ) : (<p>No items available</p>)}
       </ul>
       
      </div>
      <div>
        <h1 className=" m-4 p-4 font-bold text-2xl">{alldata?.card?.card?.title} </h1>
      </div>

     
      <div className="flex flex-wrap rounded-lg">

        
       
        {filtersearch.map((restaurant) => { 

      return (
       <Link key={restaurant?.info?.id } to={"/resturants/"+restaurant?.info?.id } >{restaurant?.info?.aggregatedDiscountInfoV2 ? <ResturantLabel {...restaurant?.info}  /> :<RestaurantCard
          
       {...restaurant?.info}

     />

       }</Link>
      );
    })
  }
</div>
<div>
  <h1 className="p-4 m-4 font-bold text-3xl ">Best Places to Eat Across Cities</h1>
  <div>
  <ul className="m-4 p-4 flex flex-wrap">
      {best.map((bests)=>
      (<li key={bests?.text} className="m-6 p-4 border border-black border-solid rounded-md" >{<a href={bests?.link} target="_blank" rel="noopener noreferrer">Best Resturants in {bests?.text}</a>}</li>

      ))}

    </ul>
  </div>

</div>

    </>
  );
}


