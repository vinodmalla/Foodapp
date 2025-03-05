
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from './useOnlineStatus';
import userContent from './userContent';
import { useSelector } from 'react-redux';
function Header() {
  const [isLog,setisLog]=useState(true)
  const onlineStatus=useOnlineStatus()
  const {loginUser}=useContext(userContent)
  const itemslength=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-slate-100">
      <header className="App-header">
        <a href='/'>
          <img src={require('./images.png')} tabIndex={1} className="p-4 m-4 w-28" alt="logo" />
        </a>
      </header>
      <div className="flex items-center p-4 m-4">
        <ul className="flex">
          <li className="px-4 font-bold hover:bg-slate-400 rounded-xl">OnlineStatus: {onlineStatus ? "💚":"❤️"}</li>
          <li className="px-4 font-bold hover:bg-slate-400 rounded-xl"  > <Link to="/">Home</Link></li>
          <li className="px-4 font-bold hover:bg-slate-400 rounded-xl" ><Link to="/about">About</Link></li>
          <li className="px-4 font-bold hover:bg-slate-400 rounded-xl"><Link to="/contact">Contact Us</Link></li> 
          <li className="px-4 font-bold hover:bg-slate-400 rounded-xl"><Link to="/cart">Cart-{itemslength.length}</Link></li>
          <li className="px-4 font-bold hover:bg-slate-400 rounded-xl"><Link to="/login">{
          isLog?(
            <button onClick={()=>setisLog(false)}>Log In</button>
          ):(
            <button onClick={()=>setisLog(true)}>Log Out</button>
          )
        }</Link></li>
          <li className='px-4 font-bold'>{loginUser}</li>
      
        </ul>
      </div>

    </div>
  );
}

export default Header;
