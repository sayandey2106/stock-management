import React , {useState} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./signup.css";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import firebase from "firebase";
import { gridDensityHeaderHeightSelector } from "@mui/x-data-grid";


export default function Signup(props) {
   
    
//   function get_profile_pic_link(file,name) {
//     console.log(file,name)
//     return (dispatch) => {
        
//       {
//             var storageRef = firebase.storage().ref();
//             var uploadTask = storageRef
//                 .child("/idProof/" + name + ".png")
//                 .put(file);
//             uploadTask.on(
//                 "state_changed",
//                 function (snapshot) {
//                 },
//                 function (error) {
//                     // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
//                     alert("Image Could Not Be Uploaded")
                   
//                 },
//                 function () {
//                     uploadTask.snapshot.ref.getDownloadURL()
//                     .then(function (downloadURL) {
//                         alert("Image Uploaded")
//                         console.log(downloadURL)
//                         // setUserPhotoIdUrl( downloadURL);
//                         // props.sign_up(signUpObj);
//                         // dispatch(unsetLoader());
//                         console.log(signUpObj)
                        
//                     })
//                 },
//             );
//         }
//     };
// }

    const history = useHistory();
    const [img, setimg] = useState()
    useEffect(()=>{
      // createCaste("1");
    

// console.log(date_create);
    },[])

const handleSignUp = () =>{
console.log(signUpObj)
  props.sign_up(signUpObj);

 
  history.push('/');
  


}







const [userFullName,setUserFullName]= useState("");
const [userEmail,setUserEmail]= useState("");
const [userPassword, setUserPassword]= useState("");
const [userPhoneNo,setUserPhoneNo]= useState("");
const [userPhotoIdUrl, setUserPhotoIdUrl]= useState("");

let signUpObj = {userFullName,userEmail,userPassword,userPhoneNo,userPhotoIdUrl}

    return (


    <div className="signup">
      <div className="container  justify-content-center">
        <div className="signup-box ">
          <div className="row ">
            <div className="col-md-7">

             
              <div className="content ">
              <form>

               <h6>NAME</h6>
                <input
                  type="text"
                  class="form-control signup-form"
                  placeholder="NAME"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={userFullName}
                  onChange={(event) => {
                    setUserFullName(event.target.value);
                  }}
                />
                <h6>EMAIL ID</h6>
                <input
                  type="email"
                  class="form-control signup-form"
                  placeholder="EMAIL ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={userEmail}
                  onChange={(event) => {
                    setUserEmail(event.target.value);
                  }}
                />
                <h6>MOBILE NO</h6>
                <input
                  type="number"
                  class="form-control signup-form"
                  placeholder="MOBILE NUMBER"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={userPhoneNo}
                  onChange={(event) => {
                    setUserPhoneNo(event.target.value);
                  }}
                />
                
                 <h6>PASSWORD</h6>
                <input
                  type="password"
                  class="form-control signup-form "
                  placeholder="PASSWORD"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  required
                  value={userPassword}
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                />    
                
                         
                  <h6>ID PROOF</h6>
                     <div class="input-group mb-3">

  <div class="custom-file">
    <input type="file" class="custom-file-input my-1" id="inputGroupFile01"  onChange={(e)=>{
                
                setimg((e.target.files[0]));
console.log(img)
              }}/>
   {/* <label class="custom-file-label" for="inputGroupFile01">Choose file</label>  */}
     {/* <button class=" btn btn-warning my-1" onClick={()=>{
      get_profile_pic_link(img,userFullName)
    }}>Upload</button> */}
  </div>
</div>
                <button className="btn btn-primary my-2"
                type="button"
                  onClick= {()=>{ props.get_profile_pic_link(img,userFullName,signUpObj)}}
                // onClick= {()=>{ props.sign_up(signUpObj,img)}}
                >Sign Up
                    </button>
                    <Link to="/">
                    <h4
                      className="my-1"
                      style={{ color: "black", fontSize:"20px", textDecoration: "underline" }}
                    >
                      Already have an account
                    </h4>
                  </Link>
           
              </form>
              </div>
            </div>
            <div className="col-md-5">
                <div className="side-img">

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
