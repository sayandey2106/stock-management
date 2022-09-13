import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UNIVERSAL from '../../config/config'
import { Link } from 'react-router-dom'
import moment from 'moment'
import axios from "axios";

export default function ChangePassword() {
    const [newPassword, setNewPassword] = useState("");
    const[confirmPassword, setConfirmPassword]= useState("");
    const handleToogle = () => {
        if (Type === "password") {
          setType("text");
        } else setType("password");
      };
    const handleToogle1 = () => {
        if (Type1 === "password") {
          setType1("text");
        } else setType1("password");
      };
      const [Type, setType] = useState("password");
    const [Type1, setType1] = useState("password");
    const [loader , setLoader] = useState(false);
      const history = useHistory();

    function change_password(password) {
        let conId =  Math.random().toString(36).slice(2);
      let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
        axios
          .post(`${UNIVERSAL.BASEURL}users/verifyuserotp`, {
            newPassword:password,
            phoneNo:localStorage.getItem('temp_phn_no')
          },
          {
            headers: {
              "origin": "http://localhost:3000",
              "content-type": "application/json",
              'requested-timestamp': date_create,
              "conversation-id": conId
            }
        }
          ). then((responseJson) => {
            console.log(responseJson)
            if (responseJson.status===200) {
  
                    // dispatch(view_profile(responseJson.token));
               
                //    dispatch( get_dashboard_data());
           history.push('/login')
                    console.log(responseJson);
                // dispatch(set_snack_bar(true, responseJson.message));
  
            } else {
                
               
            }
           
        });
      }




  return (
    <div>
         <section className="d-block login-section">
        <div className="container d-flex text-center justify-content-center ">
          <div className="card login-card text-center ">
            <div class=" content">
              {/* for email */}
              <div className="d-flex text-center justify-content-center">
             </div>
             <div class="input-group flex-nowrap">
                {/* for password */}
                <input
                  type={Type}
                  class="form-control login-form"
                  placeholder="New Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
               value={newPassword}
               onChange={(event) => {
                setNewPassword(event.target.value);
              }}
                />

                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle}
                >
                  {Type === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
              <div class="input-group flex-nowrap">
                {/* for password */}
                <input
                  type={Type1}
                  class="form-control login-form"
                  placeholder="Confirm Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  value={confirmPassword}
                  onChange={(e)=>{
                    setConfirmPassword(e.target.value);
                  }}
                />

                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle1}
                >
                  {Type1 === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
            

          
              <div className="btn-grp text-center">
                <div class="d-grid text-center">
                  
                  
                  <button
                    class= "d-block btn btn-success my-2"
                    disabled={newPassword===confirmPassword ? false : true}
                    type="button"
                    onClick={()=>{
                        change_password(confirmPassword);
                    }}
                    >
                    Submit
                  </button>
                       
                </div>
              
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
