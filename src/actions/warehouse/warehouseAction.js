import UNIVERSAL from "../../config/config";
import moment from "moment";






export const  getAllWarehouse = async () =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling get all warehouse");
   
 const response = await fetch(`${UNIVERSAL.BASEURL}warehouse`, {
    method :"GET",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
"conversation-id": conId,
  },


 });

    const data = await response.json();
  
     
    
   
    return (data)
}


export const  addNewWarehouse = async (newWarehouse) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling new warehouse");
   
 const response = await fetch(`${UNIVERSAL.BASEURL}warehouse`, {
    method :"POST",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
"conversation-id": conId,
  },
body : JSON.stringify(newWarehouse)

 });

    const data = await response.json();
  
      alert(data.message)
    
   
    return (data)
}


export const  editWarehouse = async (newWarehouse,id) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling edit warehouse");
   
  const response = await fetch(`${UNIVERSAL.BASEURL}warehouse/${id}`, {
    method :"PUT",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
  "conversation-id": conId,
  },
  body : JSON.stringify(newWarehouse)
  
  });
    const data = await response.json();
    console.log(data);
   data.status===200 ? alert("Warehouse edited successfully"): alert("Something went wrong")
    return (data)
  }


export const  deleteWarehouse = async (id) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling delete quality");
   
  const response = await fetch(`${UNIVERSAL.BASEURL}warehouse/${id}`, {
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