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
    if (localStorage.getItem("lp_user_id") !== null) {
      this.props.setLogin({
        // type: localStorage.getItem("sre_type"),
        // id: localStorage.getItem("sre_user_id"),
        token : localStorage.getItem("lp_auth_token"),
        username : localStorage.getItem("lp_user_name"),
        user_id: localStorage.getItem("lp_user_id")
        
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
