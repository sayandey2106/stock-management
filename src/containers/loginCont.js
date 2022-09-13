import React, { Component } from "react";
import { connect } from "react-redux";
// import Login from "../components/login";
import Login from "../components/login/login";


import {
  setLogin,
  set_home,
  setUsername,
  setPwd,
  login_email,
  clear_login,
  reset_login,
  get_otp,
  otp_verify
  // googleLogin
} from "../actions/loginActions";
export class Controller extends Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    reset_login: () => {
      dispatch(reset_login())
    },
    clear_login: () => {
      dispatch(clear_login())
    },
   
    setUsername: (payload) => {
      dispatch(setUsername(payload));
    },
    setPwd: (payload) => {
      dispatch(setPwd(payload));
    },
    login_email: (login) => {
      dispatch(login_email(login));
    },
    get_otp: (phn) => {
      dispatch(get_otp(phn));
    },
    otp_verify: (otp) => {
      dispatch(otp_verify(otp));
    },
   
    setLogin: (type, email, user_token, profile_img) => {
      dispatch(setLogin(type, email, user_token, profile_img));
    },
    set_home: () => {
      dispatch(set_home())
    },
    // googleLogin: () => {
    //   dispatch(googleLogin())
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);