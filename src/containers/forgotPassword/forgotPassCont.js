import React, { Component } from "react";
import { connect } from "react-redux";
// import Login from "../components/login";
import ForgotPassword from "../../components/login/forgotPassword";
import { get_otp } from "../../actions/loginActions";
import { otp_verify } from "../../actions/loginActions";

export class ForgotCont extends Component {
  render() {
    return (
      <ForgotPassword {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
   
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    
    // googleLogin: () => {
    //   dispatch(googleLogin())
    // }

    get_otp :(payload)=>{
        dispatch(get_otp(payload))
    },
    otp_verify : (payload)=>{
        dispatch(otp_verify(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotCont);