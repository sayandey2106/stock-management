import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import LoaderEm from "../loader/loader_embed";
import "./login.css";

import Loader from "../loader/loader";

import Loader_cont from "../../containers/loader/loader_cont";
import Button from "@mui/material/Button";



export default function Login(props) {
 const history = useHistory();
  useEffect(() => {
    clear_login();
    console.log(admin);
    if(localStorage.getItem('lp_auth_token')){
      history.push('/')
    }
  }, []);

  const [Type, setType] = useState("password");
  // const [Eye, setEye] = useState("fa-eye");

  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [admin, setAdmin] = useState();
  const {
    login,
    setUsername,
    setPwd,
    login_email,
    clear_login,
    snackbar,
    close_snack_bar,
    admin_login_email,
    loader,
  } = props;

  // if (login.user_id !== "") {
  //   return <Redirect to="/Products" />;
  // }

  const handleToogle = () => {
    if (Type === "password") {
      setType("text");
    } else setType("password");
  };

  return (
    <div>
     

      <section className="login-section">
        <div className="container d-flex text-center justify-content-center ">
          <div className="card login-card text-center ">
            <div class=" content">
              {/* for email */}
              <div className="d-flex text-center justify-content-center">
               

                
              </div>
             
              <input
                type="email"
                class="form-control login-form mt-3"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                required
                value={login.username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (
                    event.key === "Enter" &&
                    login.email !== "" &&
                    login.password !== ""
                  ) {
                    login_email(login);
                  }
                }}
              />

              <div class="input-group flex-nowrap">
                {/* for password */}
                <input
                  type={Type}
                  className="form-control login-form"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  value={login.password}
                  onChange={(event) => {
                    setPwd(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    if (
                      event.key === "Enter" &&
                      login.username !== "" &&
                      login.password !== ""
                    ) {
                      login_email(login);
                    }
                  }}
                />

                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle}
                >
                  {Type === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
              <div className="btn-grp">
                <div class="d-grid ">
              
<button className="btn btn-primary" style={{fontSize:"20px"}}  onClick={() => {
 login_email(login)
}}>Sign In</button>

                 
                </div>
                <div className="d-flex or">
                  <hr />
                  or <hr />
                </div>
                <div class="d-grid ">
                  <Link to="/signup/student">
                  
                    <button  class="btn btn-primary google my-3" type="button">
                    
                      Create A New User
                    </button>
                  </Link>
                  <Link to="forgot-password">
                    <h4
                      className=""
                      style={{ color: "aliceblue", textDecoration: "underline" }}
                    >
                      forgot password?
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
