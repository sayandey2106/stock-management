import React, {Component} from "react";
import { BrowserRouter as Router,  Route} from "react-router-dom";
import Controller_con from "../../containers/router/controller_cont";
import Login from "../../containers/loginCont";
import Drawer_option_con from "../../containers/router/drawer_cont";


import ProfileCont from "../../containers/profile/profileCont";
// import studentDashCont from "../../containers/studentDashboard/studentDashCont";
// import  StudentDashboardContainer  from "../../containers/studentDashboard/studentDashCont";
import  SignupCont  from "../../containers/signup/signupCont";
// import QuestionCont from "../../containers/question/questionCont";
import EditProfileCont from "../../containers/profile/editProfileCont";
// Admin Imports
import AdminSignupCont from "../../containers/signup/adminSignupCont";
// import AdminDashboardCont from "../../containers/adminDashboard/adminDashboard";
// import ForgotPassword from "../login/forgotPassword";
import ForgotPassword from "../login/forgotPassword";
import Userlist from "../userlist/Userlist";
import  HomeCont  from "../../containers/home/homeCont";
import Products from "../products/Products";
import ChangePassword from "../login/changePassword";
import { ForgotCont } from "../../containers/forgotPassword/forgotPassCont";
import { ChangePasswordCont } from "../../containers/forgotPassword/changePassCont";

class Routes extends Component {

    render() {
        const {login, classes,auth,setAuth, onLogout} = this.props;
        let body;

        // if (login.isHome===true) 
        if(!(localStorage.getItem('lp_auth_token')))
         {
            body =
                <div
                    style={{
                        display: "flex",
                    }}>
                    <main
                        style={{
                            flexGrow: 1
                        }}>
                        {/* <Route exact path="/" component={Home} /> */}
                        {/* <Route exact path="/" component={Login}/> */}
                        <Route exact path="/forgot-password" component={ForgotPassword}/>
                        <Route path="/" component={Controller_con}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup/student" component={SignupCont}/>
                        <Route exact path="/signup/admin" component={AdminSignupCont}/>
                        <Route exact path="/change-password" component={ChangePassword}/>
                        {/* <Route path="/" component={StudentDashboardContainer}/> */}
                        {/* <Route exact path="/" component={QuestionCont}/> */}
                        {/* <Route path="/" component={ProfileCont}/> */}
                   
                        {/* <Route path="/survey" component={Survey} /> */}
                    </main>
                    <main>
                            
                    <Route exact path="/products" component={Products}/> 
                        <Route exact path="/" component={HomeCont}/>
                    </main>
                </div>
        } 
        else 
          {
                body =
                <div
                    style={{
                        display: "",
                    }}>
                    <Drawer_option_con
                        
                        setAuth={setAuth}/>
                    <main
                        style={{
                            flexGrow: 1,
                            marginTop: 10
                        }}>

                        {/* <Route exact path="/login" component={Login} /> */}
                        {/* <Route exact path="/login" component={Login} /> */}
                        {/* <Route path="/" component={Controller_con}/> */}
                        {/* ADMIN ROUTES */}
                        {/* <Route exact path="/dashboard" component={AdminDashboardCont}/> */}
                        <Route exact path="/change-password" component={ChangePasswordCont}/>
                        <Route exact path="/forgot-password" component={ForgotCont}/>
                        {/* <Route exact path="/" component={Users}/> */}
                        <Route exact path="/" component={HomeCont}/>
                        {/* <Route exact path="/signup" component={SignupCont}/> */}
                        <Route exact path="/products" component={Products}/> 
                        <Route exact path="/login" component={Login}/>

                        {/* <Route path="/" component={Controller_con}/> */}

                        {/* <Route exact path="/lead" component={Lead}/> */}
                        {/* <Route exact path="/addlead" component={AddLead}/> */}
                    </main>
                    {/* <Footer /> */}
                </div>
            } 


            
            
        

        return (
            <Router>
                {body}
            </Router>
        );
    }
}

export default (Routes);
