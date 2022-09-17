import {
    LOGIN,
    LOGOUT,
    HANDLEDRAWER,
    SET_HOME,
    SET_EMAIL,
    SET_USERNAME,
    SET_PASSWORD,
    CLEAR_LOGIN,
    RESET_LOGIN,

} from "../constants/ActionTypes";
import { useHistory } from "react-router-dom";
import jwt from 'jwt-decode'
import UNIVERSAL from "../config/config.js";
import { setLoader, unsetLoader }
    from "./loader/loaderAction";
import firebase from "firebase";
import { view_profile , view_profile_admin} from "./profile/profileAction";
import { get_dashboard_data } from "./dashboard/dashboardActions";
import { setAuth } from "./signup/signupAction";
import moment from "moment";

export function setUsername(payload) {
    return {
        type: SET_USERNAME,
        payload: payload
    };
}
export function setPwd(payload) {
    return {
        type: SET_PASSWORD,
        payload: payload
    };
}
export function login_email(login) {
    console.log("login student")
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "login", {
            method: "POST",
            headers: {
                // "Accept": "application/json",
                // "origin":UNIVERSAL.PORT,
                "content-type":"application/json",
                'requested-timestamp':date_create,
                "conversation-id":conId
                // user_token: token,
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify({
             username :login.username,
            password : login.password
        
             }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status===200) {

                    dispatch(setLogin(responseJson))
                    dispatch(setAuth(true));
                        // dispatch(view_profile(responseJson.token));
                   
                    //    dispatch( get_dashboard_data());
               
                        console.log(responseJson);
                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    
                   alert(responseJson.data)
                }
                dispatch(unsetLoader())
            })

            .catch((error) => {
                console.error(error);
            });
    };
}



export function clear_login() {
    return {
        type: CLEAR_LOGIN
    };
}
export function set_home(payload) {
    return {
        type: SET_HOME
    };
}
export function setLogin(payload) {
    // localStorage.setItem('sre_type', payload.type);
    // // localStorage.setItem('qubi7_token', payload.user_token);
    // localStorage.setItem('lp_username', payload.username);
    // localStorage.setItem('sre_email', payload.email);
   
    // // localStorage.setItem('sre_profile_pic', payload.profile_pic);
    // localStorage.setItem('isHome', false)
    localStorage.setItem('lp_auth_token', payload.token);

    // localStorage.setItem('sre_user_id', payload.id);
    // localStorage.setItem('qubi7_company_id', payload.company_id);
    // localStorage.setItem('taxopliance_organization_id', payload.organization_id);
    var decode = jwt(payload.token);
    console.log(decode);
    localStorage.setItem('lp_user_name', decode.result.fullName);
    localStorage.setItem('lp_user_id', decode.result.id);
    localStorage.setItem('lp_user_role', decode.result.role);
    return {
        type: LOGIN,
        payload: decode,
    };
}

// export function handleDrawerToggle(mobileOpen) {
//     mobileOpen = !mobileOpen;
//     return {
//         type: HANDLEDRAWER,
//         payload: mobileOpen
//     };
// }
export function onLogout() {
    return {
       type: LOGOUT
    }
}
export function reset_login(){
    return {
        type: RESET_LOGIN
    }
}





export function get_otp(phnNo) {

    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn(phnNo);
    return async () => {
        (setLoader(true));
        try {
        const response = await fetch(UNIVERSAL.BASEURL + "users/forgotpassword", {
          method: "POST",
          headers: {
            "origin": "http://localhost:3000",
            "content-type": "application/json",
            'requested-timestamp': date_create,
            "conversation-id": conId
          },
          body: JSON.stringify({
            phoneNo: phnNo
          }),
        });
        const responseJson = await response.json();
        console.log(responseJson.error);
        if (responseJson.status === 200) {


          alert(responseJson.msg);
          localStorage.setItem('temp_phn_no', responseJson.phoneno);

        } else {

          // dispatch(set_snack_bar(true, responseJson.message));
          alert(responseJson.msg);
        }
        (setLoader(false));
      } catch (responseJson_1) {
        console.log(responseJson_1.error);
      }

              
    };
}

export function otp_verify(otp){

  // const signUpObj = {signup }
  let conId =  Math.random().toString(36).slice(2);
  let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
//   console.warn(phnNo);
  return (dispatch) => {
    //   dispatch(setLoader(/));
      return fetch(UNIVERSAL.BASEURL + "users/verifyuserotp", {
          method: "POST",
          headers: {
             "origin":"http://localhost:3000",
              "content-type":"application/json",
              'requested-timestamp':date_create,
              "conversation-id":conId
          },
          body: JSON.stringify({
            userOtp:otp,
            phoneNo:localStorage.getItem('temp_phn_no')
             }),
      }).then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson.error)
              if (responseJson.status===200) {

                
                  alert(responseJson.msg)
                //   history.push('/change-password')

              } else {
                  
                  // dispatch(set_snack_bar(true, responseJson.message));
                 alert(responseJson.data);
              }
            //   dispatch(setLoader(false))
          })

          .catch((responseJson) => {
              console.log(responseJson.error);
          });

            
  };
}


export function  change_password  (password) {

    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn(password);
    return (dispatch) => {
        dispatch(setLoader(true));
        return fetch(UNIVERSAL.BASEURL + "users/verifyuserotp", {
            method: "POST",
            headers: {
               "origin":"http://localhost:3000",
                "content-type":"application/json",
                'requested-timestamp':date_create,
                "conversation-id":conId
            },
            body: JSON.stringify({
                newPassword:password,
              phoneNo:localStorage.getItem('temp_phn_no')
               }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.error)
                if (responseJson.status===200) {

                  
                    alert(responseJson.user)
                   

                } else {
                    
                    // dispatch(set_snack_bar(true, responseJson.message));
                   alert(responseJson.data);
                }
                dispatch(setLoader(false))
            })

            .catch((responseJson) => {
                console.log(responseJson.error);
            });

              
    };
}


// export function ChangepasswordFunc(newpassword, confirmpassword, token) {
//     return (dispatch) => {
//         if (newpassword === confirmpassword && newpassword !== "" && confirmpassword !== "") {
//             return fetch(UNIVERSAL.BASEURL + "v1/resetpassword", {
//                     method: "POST",
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         password: newpassword,
//                         token: token
//                     }),
//                 }).then((response) => response.json())
//                 .then((responseJson) => {
//                     if (responseJson.status) {
//                         dispatch(setSnackbar(responseJson.status, "Password Changed Successfully"));
//                     } else {
//                         dispatch(setSnackbar(responseJson.status, "Password could not be changed"));
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         } else {
//             dispatch(setSnackbar(true, "password miss match"));
//         }
//     };
// }
// export function check_login_params() {
//     if (localStorage.getItem("user_token") !== null) {
//         return (dispatch) => {
//             dispatch(setLogin(localStorage.getItem("type"), localStorage.getItem("email"), localStorage.getItem("user_token"), localStorage.getItem("profile_img"), localStorage.getItem("name")))
//             if (!firebase.apps.length) {
//                 firebase.initializeApp(firebase_config);
//             }
//         }
//     }
// }

// export const openLoginModal = () => {
//     const loginStatus = localStorage.getItem("skyyrider_user_id");
//     if (loginStatus)
//         return {
//             type: CLOSE_LOGIN_MODAL
//         }
//     return {
//         type: OPEN_LOGIN_MODAL
//     }
// }

// export const closeLoginModal = () => ({
//     type: CLOSE_LOGIN_MODAL
// })

// export const googleLogin = () => dispatch => {
//     dispatch(setLoader());
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             const user = res.user;
//             console.log(user);
//             dispatch(socialLogin(user.email, user.photoURL))
//         })
//         .catch(err => {
//             console.error(err);
//         })
// }

// export const socialLogin = (email, profilepic) => dispatch => {

//     fetch(UNIVERSAL.BASEURL + "login_social", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({email, profilepic})
//     })
//         .then(res => res.json())
//         .then(res => {
//             if (res.status) {
//                 dispatch(setLogin(res.result))
//                 dispatch(closeLoginModal());
//                 dispatch(set_snack_bar(true, res.message));
//             } else {
//                 dispatch(set_snack_bar(res.status, res.message));
//             }
//             dispatch(unsetLoader())
//         })
// }



// if (login.email === "nepal" && login.password === "delhisatta") {
    
    
//     // if (responseJson.result.type === "A" || responseJson.result.type === "SA") {
//             dispatch(setLogin({type:'A',name:"nepal",_id:"7678676876"}))
//             // dispatch(closeLoginModal());
//             // } else {
//             dispatch(set_snack_bar(true,"Login Successful"));
//         }

//         // }

//         dispatch(unsetLoader())

//     };

