import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className='font-bold m-4 p-4 text-4xl'>Contact US</h1>
      <form>
        <label className='p-4 m-4  font-semibold'>Name</label>
        <input className='p-1 m-4 border border-black border-solid' type="text" placeholder='name' ></input>
        <button  className='m-4 p-2 bg-blue-400 font-semibold text-black rounded-2xl px-1'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
