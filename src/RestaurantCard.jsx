import { CDN_URL } from "./Constants";


 const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  lastMileTravel,
  costForTwo,
  avgRating,
}) => {
  
  return (
    <>
    
      <div className="p-4 m-4 w-[250px] bg-zinc-100 hover:bg-gray-200">
       <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="rounded-lg w-56"
      />
      <h2 className="py-4 font-bold items-center">{name}</h2>
      {<h4 className="flex">{cuisines.join(" , ")}</h4> }
     
      <h4>{areaName}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}⭐
        </h4>
        <h4>{lastMileTravel}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
    </>

    
  );
};
export const withLabelPromotes=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
    
        <RestaurantCard {...props} />
      </div>
      

    )
  }
}
export default RestaurantCard;