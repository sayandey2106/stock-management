import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import LG from "../../components/router/logout_btn";


import { setLogin } from "../../actions/loginActions";
import {
  onLogout
} from "../../actions/loginActions";
import { setAuth } from "../../actions/signup/signupAction";

export class LG_Cont extends Component {

  render() {
    return (
      <LG {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
    login: store.login,
    auth: store.auth
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(onLogout());
    },
    setLogin : (payload) =>{
      dispatch(setLogin(payload));
    }
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LG_Cont);