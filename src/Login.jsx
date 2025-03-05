import React from 'react'
import { Link } from 'react-router-dom'
import { useActionState } from 'react'

function Login() {
  function formSubmit(){
    return {message:"please wait we are upadae the application and it will take time to login"}
  }
  const [state,Submit]=useActionState(formSubmit,{message:""})
  return (
    <div className='p-4 m-4 items-center  '>
        <button className='m-4 border border-solid border-black bg-slate-100 hover:bg-slate-200 font-semiboldold rounded-full px-2 py-1 '><Link to="/">X</Link></button>
        <h1 className='p-4 m-2 font-bold'>Log In</h1>
        <div className='flex items-center'>
             <p className='p-4 '>or</p> <p className=' text-orange-600'>Created Account</p>

        </div>
        <form action={Submit}>
          <input className="border border-solid border-black rounded-sm" type='number'  placeholder='number' ></input>
          <p className='text-red-600'>{state.message}</p>
          <button type="submit" className="px-4 py-1 items-center m-4 bg-orange-300 rounded-xl hover:bg-orange-400 font-semibold">Log In</button>
          <p className='p-4 m-2'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </form>
    

      
    </div>
  )
}

export default Login
