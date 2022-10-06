import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  Link,
  Redirect
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import {NavLink} from "react-router-dom";

export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  render() {
    const { login,setLogin} = this.props;
 


    if (this.state.redirect === true) {
      return <Redirect to="/login" />
    }
    return (
      // <IconButton
      //   onClick={() => {
      //     sessionStorage.removeItem("qubi7_type");
      //     sessionStorage.removeItem("qubi7_name");
      //     sessionStorage.removeItem("qubi7_profile_pic");
      //     sessionStorage.removeItem("qubi7_user_id");
      //     sessionStorage.removeItem("qubi7_company_id");
      //     // sessionStorage.removeItem("taxopliance_organization_id");
      //     this.setState({redirect:true})
      //     this.props.onLogout()
      //   }}>
      //   <Icon style={{ color: "white" }}>power_settings_new</Icon>
      // </IconButton>

      <button

onClick={() => {
  sessionStorage.removeItem("lp_auth_token");
        // sessionStorage.removeItem("sre_name");
        // sessionStorage.removeItem("qubi7_profile_pic");
        sessionStorage.removeItem("lp_user_name");
        sessionStorage.removeItem("lp_user_id");
        sessionStorage.removeItem("lp_user_role");
        // sessionStorage.removeItem("qubi7_company_id");
        // sessionStorage.removeItem("taxopliance_organization_id");
        this.setState({redirect:true})
        // this.props.onLogout()
        // setLogin({
        //   username :"",
        //   isHome:true,
        //   name:"",
        //   user_id:"",
        //   password:"",
        //   type:""
        // })
        // this.props.setAuth(false)
        // console.log(login.username)
        
      }}
      
      style={{position:"relative",
      height:"50px",
      width:"80px",
      border:"1px solid",
           borderRadius:"5px",
           // background:"#fadde1",
           fontSize:"15px",
          // left:"-100px"
          marginLeft:"15px"
          
          }}
          
          > Log Out</button>

      
    )
  }
}
