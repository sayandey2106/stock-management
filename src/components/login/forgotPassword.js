import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import UNIVERSAL from '../../config/config';
import moment from 'moment';
import axios from "axios";


export default function ForgotPassword() {

    const [otp, setOtp] = useState(false);
    const [submitOtp, setSubmitOtp] = useState(false);
    const [enterOtp, setEnterOtp]= useState("")
    const [Type, setType] = useState("password");
    const [Type1, setType1] = useState("password");
    const [phnNo , setPhnNo] = useState("");
    const history = useHistory();
    const [loader , setLoader] = useState(false);

    function get_otp(phn) {
      let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
      axios
        .post(`${UNIVERSAL.BASEURL}users/forgotpassword`, {
          phoneNo:phn
        },
        {
          headers: {
            
            "content-type": "application/json",
            'requested-timestamp': date_create,
            "conversation-id": conId
          }
      }
        ). then((responseJson) => {
          console.log(responseJson)
          if (responseJson.status===200) {

                  // dispatch(view_profile(responseJson.token));
             alert(responseJson.data.msg)
              //    dispatch( get_dashboard_data());
         localStorage.setItem('temp_phn_no',phn);
                  console.log(responseJson);
              // dispatch(set_snack_bar(true, responseJson.message));

          } else {
              
             
          }
         
      });
    }

    function otp_verify(otp) {
      let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
      axios
        .post(`${UNIVERSAL.BASEURL}users/verifyuserotp`, {
          userOtp:otp,
          phoneNo:localStorage.getItem('temp_phn_no')
        },
        {
          headers: {
            
            "content-type": "application/json",
            'requested-timestamp': date_create,
            "conversation-id": conId
          }
      }
        ). then((responseJson) => {
          console.log(responseJson)
          if (responseJson.status===200) {

                  // dispatch(view_profile(responseJson.token));
                  localStorage.setItem('temp_otp',"verified");
              //    dispatch( get_dashboard_data());
         history.push('/change-password')
                  console.log(responseJson);
              // dispatch(set_snack_bar(true, responseJson.message));

          } else {
              
            alert(responseJson.data.data)
          }
         
      });
    }



  return (
    <div>
              <section className="login-section">
        <div className="container d-flex text-center justify-content-center ">
          <div className="card login-card text-center ">
            <div class=" content">
              {/* for email */}
              <div className="d-flex text-center justify-content-center">
             </div>
              <input
                type="text"
                class="form-control login-form mt-3"
                placeholder="Enter registered email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
                className="d-block form-control login-form mt-3"
              value={phnNo}
              onChange={(e)=>{
                setPhnNo(e.target.value);
                console.log("phn no is ", phnNo)
              }}
              />

            <input
                type="text"
                placeholder="OTP"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
              className={otp===true ? "d-block form-control login-form mt-3":"d-none"}
               value={enterOtp}
               onChange={(e)=>{
                setEnterOtp(e.target.value)
                console.log("otp is ", enterOtp);
               }}
              />

          
              <div className="btn-grp">
                <div class="d-grid ">
                  <button
                    class="btn btn-primary sign-in-btn"
                    type="button"
                    onClick={()=>{
                     setOtp(true)
                     get_otp(phnNo)
                     console.log("get otp")
                    }}
                    >{otp===false?"GET OTP":"RESEND OTP"}
                    
                  </button>
                  <button
                    class={otp===true ? "d-block btn btn-success my-2":"d-none"}
                    type="button"
                    onClick={()=>{
                        setSubmitOtp(true)
                        otp_verify(enterOtp)
                     
                    }}
                    >
                    Submit OTP
                  </button>
                </div>
              
            
              </div>
            </div>
          </div>
        </div>
      </section>


                    {/* after submit otp */}

       

    </div>
  )
}
