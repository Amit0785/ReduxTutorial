import { LOGINSUCCESS,LOGINERROR,LOGINREQUEST,LOGOUT } from "./types";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';



 const loginRequest = () => {
    return {
      type: LOGINREQUEST,
    };
  };

const loginSuccess=(successData)=>{
    return {
        type: LOGINSUCCESS,
        payload: successData,
      };
}

 const loginerror=(errorData)=>{
    return {
        type: LOGINERROR,
        payload: errorData,
      };
}

export const LoginApi =(data)=>{

    //return data

    return dispatch => {
        loginRequest()
        // axios
        // .post(`https://nodeserver.mydevfactory.com:2147/login`, data)
        // .then(async response => {

        //     console.log("------->",response.data);
       

        //   if (response.data.statuscode === 200) {

        //     //dispatch(loginSuccess)
            
        //   } else {
        //     console.log('response.data.statuscode===>', response.data);
           
        //   }
        // })
        // .catch(function (error) {
        //   console.log('error==>', error);
        //   // Request made and server responded

       
        //   if (error.response) {
        //     console.log('response error===>', error.response.data);

           
        //   } else if (error.request) {
        //     // The request was made but no response was received
        //     console.log('Request Error==>', error.request);
        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log('Error', error.message);
        //   }
        // });

        if(data.emailAddress.trim()===''){
            toast.error('Email address is required')
            dispatch(loginerror('Email address is required'))
        }else if(data.password.trim()===''){
            toast.error('Password is required')
            dispatch(loginerror('Password is required'))
        }else{
            toast.success('Login Successfully')
            dispatch(loginSuccess(data))
        }

     

    }

}



export const logoutFunc=()=>{

console.log("======>logoutFunc");
return (dispatch)=>{
    dispatch({ type: LOGOUT})
}
    
}