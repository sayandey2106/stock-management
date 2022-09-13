import React, { Component } from "react";
import { connect } from "react-redux";
import ChangePassword from "../../components/login/changePassword";
import { change_password } from "../../actions/loginActions";


export class ChangePasswordCont extends Component {
  render() {
    return (
      <ChangePassword {...this.props} />
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

    change_password :(payload)=>{
        dispatch(change_password(payload))
    },
  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordCont);