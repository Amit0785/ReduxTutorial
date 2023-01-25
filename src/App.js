import React,{useState,useEffect} from 'react'
import Navigation from './App/Navigation/Navigation'
import Header from './App/Components/Header'
import Footer from './App/Components/Footer'
//import Login from './App/Pages/Login'
import AuthNavigation from './App/Navigation/AuthNavigation'
import { useSelector } from 'react-redux'

import { ToastContainer} from 'react-toastify';

function App() {

  const isLogin= useSelector(state=>state.LoginReducer.isLogin)

  console.log("------>",isLogin);

  return (
    <div style={{flex:1,height:"100vh"}}>
    <ToastContainer 
    position='top-right' />
    {!isLogin?
    <AuthNavigation/>:
    <>
    <Header/>

    <Navigation/>
    <Footer/>
    </>}

  
    </div>
  )
}

export default App