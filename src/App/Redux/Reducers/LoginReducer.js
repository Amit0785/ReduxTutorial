import {LOGINERROR,LOGINSUCCESS,LOGINREQUEST,LOGOUT} from './../Actions/types'

const initialState = {
    isLogin: false,
    loading:false,
    toastMessage:'',
    loginData: []
  };

const LoginReducer=(state=initialState,action)=>{

    switch(action.type){
        case LOGINSUCCESS:
            return{
            ...state,
            loading: false,
            isLogin:true,
            toastMessage:'Login Successfully',
            loginData:action.payload
        }

        case LOGINERROR:
            return{
                ...state,
                loading: false,
                isLogin:false,
                toastMessage:action.payload
            }

            case LOGINREQUEST:
                return{
                    ...state,
                    loading: true,
                   
                }

            case LOGOUT:
                    return{
                        ...state,
                        isLogin: false,
                       
                    }

        default:
                return state;
    }

}


export default LoginReducer