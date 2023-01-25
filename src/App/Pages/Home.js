import React from 'react'
import { useDispatch, } from 'react-redux';
import { logoutFunc } from '../Redux/Actions/LoginAction';
function Home() {

    const dispatch=useDispatch()

    const logoutFunction=()=>{
        console.log("Logout");
       dispatch(logoutFunc())
    }
  return (
    <div>
        <h1>Home</h1>
        <button
        onClick={()=>{logoutFunction()}}>
        Logout

        </button>
    </div>
  )
}

export default Home