import React, { Component } from "react";
import { connect } from "react-redux";
import {
 edit_mobile, edit_photo, get_edit_profile_pic_link 
} from "../../actions/profile/profileAction"
import Userlist from "../../components/userlist/Userlist";
import { set_home } from "../../actions/loginActions";
import { setAuth } from "../../actions/signup/signupAction";
import { PlaylistAddOutlined } from "@material-ui/icons";
import { get_user } from "../../actions/user/userAction";

export default function HomeCont(){
 
    return (
      <Userlist />
      
    );
 
};
// export const mapStateToProps = store => {
//   return {
//     profile: store.profile,
//     login: store.login,
//     loader: store.loader,
//     auth: store.auth
//     // snackbar: store.snackbar,
//   };
// };
// export const mapDispatchToProps = dispatch => {
//   return {
  

//  get_user : ()=>{
//   dispatch(get_user())
//  }

//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);