import './index.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header'
import About from './About';
import Contact from './Contact';
import Error from './Error';
import ResturantsMenu from './ResturantsMenu';
import { createBrowserRouter ,Outlet} from 'react-router-dom';
import Login from './Login';
import userContent from './userContent';
import { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import Cartapp from './Cartapp';
import Cart from './Cart';
import MindResturant from './MindResturant';

function App() {
  const [user,setUser]=useState();
  useEffect(()=>{
    const data={name:"vinod"}
      setUser(data.name)
  },[])


    
  return (
    <>
    <Provider store={Cartapp} >
      <userContent.Provider value={{loginUser:user,setUser}} >
        <Header />
        <Outlet />
        <Footer />
      </userContent.Provider>
    </Provider>
    </>
  )
}
export const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[  {
      path:"/",
      element:<Body />,
      errorElement:<Error />
    },{
      path:"/about",
      element:<About />,
      errorElement:<Error />
    },
    {
      path:"/contact",
      element:<Contact />,
      errorElement:<Error />
    },{
      path:"/resturants/:resId",
      element:<ResturantsMenu />,
      errorElement:<Error />
    },{
      path:"/login",
      element:<Login />,
      errorElement:<Error />
    },{
      path:"/cart",
      element:<Cart />,
      errorElement:<Error />
    },{
      path: "/resturant/:resId",
      element: <MindResturant />,
      errorElement: <Error />
    }]

  },
    
   
])

export default App;
