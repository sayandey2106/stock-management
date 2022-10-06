import UNIVERSAL from "../../config/config";
import moment from "moment";


export const  getAllType = async () =>{

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
  const response = await fetch(`${UNIVERSAL.BASEURL}producttype`, { headers });
  const data = await response.json();
  console.log(data);
  return(data);
}

export const  addNewType = async (newType) =>{
   
    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn("calling new type");
    console.warn(newType);
 const response = await fetch(`${UNIVERSAL.BASEURL}producttype`, {
    method :"POST",
  headers : {
    "content-type": "application/json",
    "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
   "currentUser":sessionStorage.getItem("lp_user_email"),
   "requested-timestamp": date_create,
"conversation-id": conId,
  },
body : JSON.stringify(newType)

 });

    const data = await response.json();
  
      alert(data.message)
    
   
    return (data)
}

export const  editType = async (newType,id) =>{
   
  // const signUpObj = {signup }
  let conId =  Math.random().toString(36).slice(2);
  let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
  console.warn("calling edit type");
 
const response = await fetch(`${UNIVERSAL.BASEURL}producttype/${id}`, {
  method :"PUT",
headers : {
  "content-type": "application/json",
  "Authorization":`Bearer ${sessionStorage.getItem("lp_auth_token")}`,
 "currentUser":sessionStorage.getItem("lp_user_email"),
 "requested-timestamp": date_create,
"conversation-id": conId,
},
body : JSON.stringify(newType)

});
  const data = await response.json();
  console.log(data);
 data.status===200 ? alert("Type edited successfully"): alert("Something went wrong")
  return (data)
}

export const  deleteType = async (id) =>{
   
  // const signUpObj = {signup }
  let conId =  Math.random().toString(36).slice(2);
  let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
  console.warn("calling delete type");
 
const response = await fetch(`${UNIVERSAL.BASEURL}producttype/${id}`, {
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