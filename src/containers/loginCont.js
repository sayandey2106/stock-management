import React, { Component } from "react";
import { connect } from "react-redux";
// import Login from "../components/login";
import Login from "../components/login/login";


import {
  setLogin,
  set_home,
  setEmail,
  setPwd,
  login_email,
  clear_login,
  admin_login_email
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
    clear_login: () => {
      dispatch(clear_login())
    },
   
    setEmail: (payload) => {
      dispatch(setEmail(payload));
    },
    setPwd: (payload) => {
      dispatch(setPwd(payload));
    },
    login_email: (login) => {
      dispatch(login_email(login));
    },
    admin_login_email: (login) => {
      dispatch(admin_login_email(login));
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