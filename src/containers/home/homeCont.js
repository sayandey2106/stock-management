import React, { Component } from "react";
import { connect } from "react-redux";
import {
 edit_mobile, edit_photo, get_edit_profile_pic_link 
} from "../../actions/profile/profileAction"
import Userlist from "../../components/userlist/Userlist";
import { set_home } from "../../actions/loginActions";
import { setAuth } from "../../actions/signup/signupAction";
import { PlaylistAddOutlined } from "@material-ui/icons";
export class HomeCont extends Component {
  render() {
    return (
      <Userlist {...this.props} />
      
    );
  }
};
export const mapStateToProps = store => {
  return {
    profile: store.profile,
    login: store.login,
    loader: store.loader,
    auth: store.auth
    // snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
  
    edit_mobile: (value) => {
      dispatch(edit_mobile( value))
    },
    edit_photo: (value) => {
      dispatch(edit_photo( value))
    },
 get_edit_profile_pic_link :(file , name) =>{
   dispatch( get_edit_profile_pic_link (file,name))
 },
 set_home: ()=>{
  dispatch(set_home())
 },
 setAuth :(payload)=>{
  dispatch(setAuth(payload))
 }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);