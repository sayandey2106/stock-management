import UNIVERSAL from "../../config/config";
import moment from "moment";
import { setLoader, unsetLoader } from "../loader/loaderAction";
import { SET_ALL_USER } from "../../constants/user/userConstants";

export const  getAllUsers = async () =>{

    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("hi");
    const headers = {  "content-type": "application/json",
     "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
    "currentUser":sessionStorage.getItem("lp_user_email"),
    "requested-timestamp": date_create,
"conversation-id": conId,
      }
 const response = await fetch(`${UNIVERSAL.BASEURL}users`, { headers });
    const data = await response.json();
    // console.log(data);
    
 return(data)

 
}

export const  activateUser = async (phnNo) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling active user");
    const headers = {  "content-type": "application/json",
     "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
    "currentUser":sessionStorage.getItem("lp_user_email"),
    "requested-timestamp": date_create,
"conversation-id": conId,
    }
    const body ={
        "username" : phnNo,
        
    }
    const meth ={
        method:"PUT"
    }
 const response = await fetch(`${UNIVERSAL.BASEURL}users/deactivate`, {
    method :"PUT",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
"conversation-id": conId,
  },
body : JSON.stringify({
    "username" : phnNo,
})

 });
    const data = await response.json();
    console.log(data);
   
    return (data)
}




