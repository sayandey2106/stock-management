import UNIVERSAL from "../../config/config";
import moment from "moment";






export const  getAllshop = async () =>{

    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    
    const headers = {  "content-type": "application/json",
     "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
    "currentUser":sessionStorage.getItem("lp_user_email"),
    "requested-timestamp": date_create,
"conversation-id": conId,
      }
  const response = await fetch(`${UNIVERSAL.BASEURL}shop`, { headers });
  const data = await response.json();
  console.log(data);
  return(data);
}


export const  addNewShop = async (newShop) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling new quality");
   
 const response = await fetch(`${UNIVERSAL.BASEURL}shop`, {
    method :"POST",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
"conversation-id": conId,
  },
body : JSON.stringify(newShop)

 });

    const data = await response.json();
  
      alert(data.message)
    
   
    return (data)
}


export const  editShop = async (newShop,id) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling edit quality");
   
  const response = await fetch(`${UNIVERSAL.BASEURL}quality/${id}`, {
    method :"PUT",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
  "conversation-id": conId,
  },
  body : JSON.stringify(newShop)
  
  });
    const data = await response.json();
    console.log(data);
   data.status===200 ? alert("Quality edited successfully"): alert("Something went wrong")
    return (data)
  }


export const  deleteQuality = async (id) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling delete quality");
   
  const response = await fetch(`${UNIVERSAL.BASEURL}shop/${id}`, {
    method :"DELETE",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
  "conversation-id": conId,
  },
  
  
  });
    const data = await response.json();
    console.log(data);
   alert(data.msg)
    return (data)
  }