import React from 'react'
import {Routes,Route} from 'react-router-dom'

//import Login from '../Pages/Login'
import Error from '../Pages/Error'
import Home from '../Pages/Home'


function Navigation() {
  return (
    <Routes>
    <Route path='/' element={ <Home/>}/>
    {/* <Route path='/Home' element={ <Home/>}/> */}
    {/* <Route path='/Service' element={ <Service/>}/>
    <Route path='/Contact' element={ <Contact/>}/>
    <Route path='/AboutUs' element={ <AboutUs/>}/> */}
    <Route path='/*' element={ <Error/>}/>
  </Routes>
  )
}

export default Navigation