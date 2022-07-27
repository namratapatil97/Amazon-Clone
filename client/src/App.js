import React,{useState, useEffect} from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav';
import SignIn from './components/signup_sign/SignIn';
import SignUp from './components/signup_sign/SignUp';
import {Routes, Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import BuyNow from './components/buynow/BuyNow';
import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    },2000)
  },[])

  return (
    <>
    {
      data ? (
        <>
   <Navbar/>
    <Newnav/>
    <Routes>
      <Route exact path='/' element={<Maincomp/>}/>
      <Route exact path='/login' element={<SignIn/>}/>
      <Route exact path='/register' element={<SignUp/>}/>
      <Route exact path='/getproductsone/:id' element={<Cart/>}/>
      <Route exact path='/buynow' element={<BuyNow/>}/>

    </Routes>
    <Footer/>
        </>
      ) : (
        <div className='circle'>
          <CircularProgress/>
          <h2>Loading...</h2>
        </div>

      )
    }
   
    </>
    
  
  );
}

export default App;
