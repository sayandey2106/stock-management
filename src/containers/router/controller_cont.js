import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import LoginController from "../../components/router/controller";
import { setAuth } from "../../actions/signup/signupAction";
//import { setAffiliates,setEmail, setPhone, setdescription,resetAffiliates,AffiliatesFunc,closeSnackbar} from "../../actions/affiliates/affiliates_action";
import {
  setLogin
} from "../../actions/loginActions";

export class Controller_con extends Component {

  render() {
    return (
      <LoginController {...this.props} />
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
      setLogin: (payload) => {
        dispatch(setLogin(payload));
      },
      setAuth: (payload) => {
        dispatch(setAuth(payload));
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Controller_con );