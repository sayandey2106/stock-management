import {
    SIGNUP,
    CREATE_CASTE,
    CREATE_COLLEGE,
    CREATE_EMAIL,
    CREATE_GENDER,
    CREATE_NAME,
    CREATE_PASSWORD,
    CREATE_PHONE,
    CREATE_PROFILE_PIC,
    CREATE_SKILLS,
    CREATE_TYPE,
    ADMIN_CREATE_EMAIL,
    ADMIN_CREATE_NAME,
    ADMIN_CREATE_PASSWORD,
    ADMIN_CREATE_PHONE,
    ADMIN_CREATE_PROFILE_PIC
   } from "../../constants/signup/signupConstants";
   import moment from "moment";
   import firebase from "firebase";
   
import UNIVERSAL from "../../config/config";
import { Redirect } from "react-router-dom";
import { storage } from "../../constants/ActionTypes";
import { setLoader, unsetLoader }
    from "../loader/loaderAction";
import { AUTH } from "../../constants/authConst";

   export function createEmail(payload) {
    return {
        type:  CREATE_EMAIL,
        payload: payload
    };
}
export function createName(payload) {
    return {
        type:  CREATE_NAME,
        payload: payload
    };
}
export function createPassword(payload) {
    return {
        type: CREATE_PASSWORD,
        payload: payload
    };
}

export function createCaste(payload) {
    return {
        type: CREATE_CASTE,
        payload: payload
    };
}
export function createSkills(payload) {
    return {
        type: CREATE_SKILLS,
        payload: payload
    };
}
export function createPhone(payload) {
    return {
        type: CREATE_PHONE,
        payload: payload
    };
}
export function createProfilePic(payload) {
    return {
        type: CREATE_PROFILE_PIC,
        payload: payload
    };
}
export function createCollege(payload) {
    return {
        type: CREATE_COLLEGE,
        payload: payload
    };
}
export function createGender(payload) {
    return {
        type: CREATE_GENDER,
        payload: payload
    };
}
export function createType(payload) {
    return {
        type: CREATE_TYPE,
        payload: payload
    };
}

export function sign_up(signup, url) {

    // const signUpObj = {signup }
    let conId =  Math.random().toString(36).slice(2);
    let date_create= moment().format("YYYY-MM-DD hh:mm:ss").toString();
    console.warn(signup);
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "users", {
            method: "POST",
            headers: {
                // "Accept": "application/json",
                // "Content-Type": "application/json",
                "origin":"http://localhost:3000",
                "content-type":"application/json",
                'requested-timestamp':date_create,
                "conversation-id":conId
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify({
                userFullName:signup.userFullName,
                userEmail:signup.userEmail,
                userPassword:signup.userPassword,
                userPhoneNo:signup.userPhoneNo,
                userPhotoIdUrl:url
                // userFullName:"ss",
                // userEmail:"ss@g.com",
                // userPassword:"abcd@123",
                // userPhoneNo:"1121123212",
                // userPhotoIdUrl:"https://pngtree.com/freepng/vector-users-icon_4144740.html"
            }),
           
          

        
             
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.error)
                if (responseJson.status===200) {

                    // console.log("successfully signed up");
                    alert(responseJson.message)
                    // Registration Successful!!
                    // dispatch(setLogin(responseJson))
               
                    //     dispatch(view_profile(responseJson.authToken));
                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    
                    // dispatch(set_snack_bar(true, responseJson.message));
                   alert(responseJson.message);
                }
                dispatch(unsetLoader())
            })

            .catch((responseJson) => {
                console.log(responseJson.error);
            });

              
    };
}

  



export function createEmailAdmin(payload) {
    return {
        type:  ADMIN_CREATE_EMAIL,
        payload: payload
    };
}
export function createNameAdmin(payload) {
    return {
        type:  ADMIN_CREATE_NAME,
        payload: payload
    };
}
export function createPasswordAdmin(payload) {
    return {
        type: ADMIN_CREATE_PASSWORD,
        payload: payload
    };
}


export function createPhoneAdmin(payload) {
    return {
        type: ADMIN_CREATE_PHONE,
        payload: payload
    };
}
export function createProfilePicAdmin(payload) {
    return {
        type: ADMIN_CREATE_PROFILE_PIC,
        payload: payload
    };
}


export function get_profile_pic_link(file,name,signup) {
    console.log(file,name)
    return (dispatch) => {
        dispatch(setLoader());
      {
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef
                .child("/idProof/" + name + ".png")
                .put(file);
            uploadTask.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
                    // alert("Image Could Not Be sUploaded")
                    dispatch(unsetLoader());
                },
                function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        console.log("Image sUploaded")
                        dispatch(createProfilePic( downloadURL));
                        dispatch(unsetLoader());
                        dispatch(sign_up(signup,downloadURL))
                    });
                }
            );
        }
    };
}



export function sign_up_admin(signup) {
    console.log("signup admin")
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify(signup),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    alert("Sign Up Successful")
                    // dispatch(setLogin(responseJson))
               
                    //     dispatch(view_profile(responseJson.authToken));
                    //     dispatch( set_all_quiz());
                    //    dispatch( get_dashboard_data());
                    
                        console.log(responseJson);
                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    
                    // dispatch(set_snack_bar(true, responseJson.message));
                }
                dispatch(unsetLoader())
            })

            .catch((error) => {
                console.error(error);
            });
    };
}

export function setAuth(payload){
    return {
        type: AUTH,
        payload: payload
    };
}