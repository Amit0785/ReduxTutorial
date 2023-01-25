import React from 'react'

import {Routes,Route} from 'react-router-dom'

import Login from '../Pages/AuthPages/Login'
import Registration from '../Pages/AuthPages/Registration'
import ForgotPassword from '../Pages/AuthPages/ForgotPassword'
import Error from '../Pages/Error'

function AuthNavigation() {
  return (
    <Routes>
    <Route path='/' element={ <Login/>}/>
    <Route path='/Registration' element={ <Registration/>}/>
    <Route path='/ForgotPassword' element={ <ForgotPassword/>}/>
    {/* <Route path='/Contact' element={ <Contact/>}/> */}
    {/* <Route path='/AboutUs' element={ <AboutUs/>}/> */}
    <Route path='/*' element={ <Error/>}/>
  </Routes>
  )
}

export default AuthNavigation