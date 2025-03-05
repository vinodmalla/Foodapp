
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { MENU_API } from './Constants';

function useRestaurantMenu() {
     const { resId } = useParams();
    const [resIndfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu()

    },[])
    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        setResInfo(json.data)
    }
    
  return resIndfo;
}

export default useRestaurantMenu;


