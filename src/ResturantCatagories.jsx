import React from 'react'
import ItemLists from './ItemLists';


function ResturantCatagories({data,showdata,setShowdata}) {
    
        function handleclick(){
            setShowdata()
        }
  
  return (
    <div className='w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 '>
        <div className='flex justify-between'  onClick={handleclick}>
             <span className='font-bold'>{data.title}({data.itemCards.length})</span>
             <span className='p-4 font-semibold text-2xl'>^</span>
        </div>
        {showdata && < ItemLists data={data.itemCards} />}
        
      
    </div>
  )
}

export default ResturantCatagories
