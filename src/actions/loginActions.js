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
    // sessionStorage.setItem('sre_type', payload.type);
    // // sessionStorage.setItem('qubi7_token', payload.user_token);
    // sessionStorage.setItem('lp_username', payload.username);
    // sessionStorage.setItem('sre_email', payload.email);
   
    // // sessionStorage.setItem('sre_profile_pic', payload.profile_pic);
    // sessionStorage.setItem('isHome', false)
    sessionStorage.setItem('lp_auth_token', payload.token);

    // sessionStorage.setItem('sre_user_id', payload.id);
    // sessionStorage.setItem('qubi7_company_id', payload.company_id);
    // sessionStorage.setItem('taxopliance_organization_id', payload.organization_id);
    var decode = jwt(payload.token);
    console.log(decode);
    sessionStorage.setItem('lp_user_name', decode.result.fullName);
    sessionStorage.setItem('lp_user_id', decode.result.id);
    sessionStorage.setItem('lp_user_role', decode.result.role);
    sessionStorage.setItem('lp_user_email', decode.result.email);
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
          sessionStorage.setItem('temp_phn_no', responseJson.phoneno);

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
            phoneNo:sessionStorage.getItem('temp_phn_no')
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
              phoneNo:sessionStorage.getItem('temp_phn_no')
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
//     if (sessionStorage.getItem("user_token") !== null) {
//         return (dispatch) => {
//             dispatch(setLogin(sessionStorage.getItem("type"), sessionStorage.getItem("email"), sessionStorage.getItem("user_token"), sessionStorage.getItem("profile_img"), sessionStorage.getItem("name")))
//             if (!firebase.apps.length) {
//                 firebase.initializeApp(firebase_config);
//             }
//         }
//     }
// }

// export const openLoginModal = () => {
//     const loginStatus = sessionStorage.getItem("skyyrider_user_id");
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

