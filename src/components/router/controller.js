import React, { Component } from "react";
import firebase from "firebase";
// import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("lp_user_id") !== null) {
      this.props.setLogin({
        // type: sessionStorage.getItem("sre_type"),
        // id: sessionStorage.getItem("sre_user_id"),
        token : sessionStorage.getItem("lp_auth_token"),
        username : sessionStorage.getItem("lp_user_name"),
        user_id: sessionStorage.getItem("lp_user_id")
        
      });
      // this.props.setAuth(true)
      // if (!firebase.apps.length) {
      //   firebase.initializeApp(firebase_config);
      // }
    }
  }

  render() {
    return (
      <div />


    );
  }
}
