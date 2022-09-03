// import React from "react";
// import clsx from 'clsx';
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import logo from '../../img/logo.png'
// import MenuItem from '@material-ui/core/MenuItem';

// // import View_user_profile_cont from "../../containers/user/user_view_profile_cont";
// // import NotificationsCont from "../../containers/notifications/notificationCont";

// import { Link} from "react-router-dom";
// import LG_Cont from "../../containers/router/Lg_Cont";
// import {
//   all_admin_option,
//   // all_super_admin_option,
//   all_corporate_options,
//   // all_manager_options,

// } from "../../constants/router/router_consts";
// import { NavLink } from "react-router-dom";
// import "./drawer.css";

// const drawerWidth = 220;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
    
//   },
  
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     // backgroundColor: "#FF7000"
//     background:"#fadde1"
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),

//     backgroundColor:"#11101d",

//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     backgroundColor:"#11101d",
    

//     overflowX: "hidden",
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     // backgroundColor: '#FF7000',
//     backgroundColor:"#11101d",
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   iconStyle: {
//     position: "relative",
//     left: 8,
//     top: 3,
//     fontSize: 18,
//     marginRight: 5,
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   Icon: {
//     color:"white",
//     position:"relative",
//     left:"10px"
//   },

//   ListItem:{
//     // border:"1px solid red",
    
//     "&:hover" : {
//       borderRadius:"3px",
//       backgroundColor:"#ed5066"
//     }
//   }

  
 
// }));

// function MiniDrawer(props) {
//   const classes = useStyles();

//   const [open, setOpen] = React.useState(false);

//   function handleDrawerOpen() {
//     setOpen(true);
//   }

//   function handleDrawerClose() {
//     setOpen(false);
//   }
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   function sideBar(type, open) {
//     var side_top =
//       <div>
//         {open ?
//           <div style={{ backgroundColor:"#11101d", marginTop:-30 }}>
//             <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img" >
//               {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
//             </Avatar>
//             <Typography variant="subtitle1" className="profile-name" color="secondary">
//               Hi! {localStorage.getItem("qubi7_name")}
//             </Typography>
//           </div>
//           :
//           <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" style={{position:"relative",left:"15px"}} >
//             {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
//           </Avatar>
//         }
//       </div>;
//       // backgroundColor:'#FF7000'

//     // if (type === "M") {
//     //   return (
//     //     <div style={{ marginTop: 10 }}>
//     //       {side_top}
//     //       {all_manager_options.map((option) => (
//     //         <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
//     //           <ListItem button key={option.name}>
//     //             <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
//     //             <ListItemText primary={option.name} />
//     //           </ListItem>
//     //         </Link>
//     //       ))}
//     //     </div>
//     //   );
//     if (type === "A") {
//       return (
//         <div style={{ marginTop: 10  }}>
//           {side_top}
//           {all_admin_option.map((option) => (
//             <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
//               <ListItem button key={option.name} className="drawer_text" >
              
//                 <ListItemIcon ><Icon  className="drawer_icon">{option.icon}</Icon></ListItemIcon>
                
//                 {option.name}
//               </ListItem>
//             </Link>
//           ))}
//         </div>
//       );
//     }
//     // else if (type === "SA") {
//     //   return (
//     //     <div style={{ marginTop: 10 }}>
//     //       {side_top}
//     //       {all_super_admin_option.map((option) => (
//     //         <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
//     //           <ListItem button key={option.name}>
//     //             <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
//     //             <ListItemText primary={option.name} />
//     //           </ListItem>
//     //         </Link>
//     //       ))}
//     //     </div>
//     //   );
//     // }
//     else if (type === "CA") {
//       return (
//         <div style={{ marginTop: 10 }}>
//           {side_top}
//           {all_corporate_options.map((option) => (
//             // <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
//             <NavLink exact activeClassName="active" key={option.link} to={option.link} style={{textDecoration:"none", color:"#fff"}}>
//               <ListItem button key={option.name} className = {classes.ListItem}>
//                 <ListItemIcon className={classes.Icon}><Icon>{option.icon}</Icon></ListItemIcon>
//                 <ListItemText className="listItemText" primary={option.name} />
//               </ListItem>
//               </NavLink>
//             // </Link>
//           ))}
//         </div>
//       );
//     }
//   }

//   return (
//     // <div className={classes.root}>
//     //   <CssBaseline />
//     //   <AppBar

//     //     position="fixed"
//     //     className={clsx(classes.appBar, {
//     //       [classes.appBarShift]: open,
//     //     })}
//     //   >
//     //     <Toolbar>
//           {/* {props.type === "S" ? "" :
//             <IconButton
//               // color="inherit"
//               style={{backgroundColor:'white'}}
//               aria-label="Open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               className={clsx(classes.menuButton, {
//                 [classes.hide]: open,
//               })}
//             >
//               <Icon style={{ color: "black" }} >dehaze</Icon>
//             </IconButton>
//           } */}
// {/* 
//           <Link to="/login">
//             <img src={logo} alt="no_img" height="60" />
//           </Link> */}
//           {/* <span style={{ color: "red", marginLeft: 4 }}>alpha</span> */}
//           {/* <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>


//             {props.type === "S" &&
//               <span>
//                 <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
//                   <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" >
//                     {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
//                   </Avatar>
//                   <Icon className="profile_down_icon">keyboard_arrow_down</Icon>
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   // keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <View_user_profile_cont />
//                 </Menu> */}
//                 {/* <NotificationsCont /> */}
//               {/* </span> */}
//             {/* } */}
//             {/* <LG_Cont />

//           </div>
//         </Toolbar>
//       </AppBar> */}

//       {/* {props.type === "S" ? "" :
//         <Drawer
//           variant="permanent"
//           className={clsx(classes.drawer, {
//             [classes.drawerOpen]: open,
//             [classes.drawerClose]: !open,
//           })}
//           classes={{
//             paper: clsx({
//               [classes.drawerOpen]: open,
//               [classes.drawerClose]: !open,
//             }),
//           }}
//           open={open}
//         >
//           <div className={classes.toolbar}>
//             <IconButton onClick={handleDrawerClose}>
//               <Icon style={{ color: "#fff" }} >keyboard_arrow_left</Icon>
//             </IconButton>
//           </div>
//           <Divider style={{ backgroundColor:'#FF7000'}} />
//           <List >
//             {sideBar(props.type, open)}
//           </List>
//         </Drawer>
//       } */}


//       <div>
//       </div>
//   );
// }

// export default MiniDrawer;


import React from 'react'
import "./drawer.css"
import { Link} from "react-router-dom";
import LG_Cont from "../../containers/router/Lg_Cont";
import {Navbar, Nav, NavDropdown, Container, Image} from "react-bootstrap";
import logo from '../../img/logo.png'
import Lg_Cont from '../../containers/router/Lg_Cont';

export default function Drawer(props) {

  const {login, profile} = props;
  return (
    <Navbar className='navbar-exam-portal' collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"  >
    
      <div className='brand-bg'>

    <Image src={logo} height="45px"></Image>
   
      </div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        

      </Nav>
      <Nav>
    {
        profile.user_profile.type==="S" ?<h2 style={{color:"white", marginRight:"15px"}}>{profile.user_profile.name}</h2> : <h2 style={{color:"white", marginRight:"15px"}}>Hi Admin !</h2>
    }
      

      {
        profile.user_profile.type==="S" ?
<Link to="/profile">


      {
        profile.user_profile.profile?  <Image src={profile.user_profile.profile} height="45" style={{marginRight:"15px" , borderRadius:"50%",width:"45px"}}></Image> :   <Image src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" height="45" style={{marginRight:"15px" , borderRadius:"50%",width:"45px"}}></Image>
      }
      </Link>

: <div>

  </div>
}
    

      </Nav>
     <div style={{marginleftt:"15px"}}>
      <Lg_Cont/>
     </div>
  
    </Navbar.Collapse>

  </Navbar>
  )
}

