import React, { Component } from "react";
import { connect } from "react-redux";
import {
 edit_mobile, edit_photo, get_edit_profile_pic_link 
} from "../../actions/profile/profileAction"
import Userlist from "../../components/userlist/Userlist";
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
 }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);