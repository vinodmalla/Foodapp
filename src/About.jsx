import React from 'react'
import { useEffect,useState } from 'react'

function About() {
  const [data,setDat]=useState(null);
 
  async function fetchdata() {
    const response=await fetch("https://api.github.com/users/vinodmalla")
    const json=await response.json();
    setDat(json)
    console.log(json)

    
  }
  useEffect(()=>{
    fetchdata()

  },[])
  return (
    <div className='text-center'>
      <h1 className='m-4 p-4 font-bold'>About US</h1>
      <div>
        
        <img src={data?.avatar_url} alt={data?.name} className='m-auto p-4 content-center w-48 rounded-full'/>
        <h2 className='m-4 p-2 font-bold'>Name-{data?.name}</h2>
        <h2 className='m-4 p-2 font-bold'>Company-{data?.company}</h2>
        <h2 className='m-4 p-2 font-bold'>Location-{data?.location}</h2>
      </div>

    </div>
  )
}

export default About
