import React, {useEffect, useState} from 'react';
import './Userlist.css';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { setAuth } from '../../actions/signup/signupAction';
import Box from '@mui/material/Box';
import Piecharts from '../piecharts/piecharts';
import { useHistory } from 'react-router-dom';
import UNIVERSAL from '../../config/config';
import moment from 'moment';
import axios from 'axios';
import { getAllUsers , activateUser, deactivateUser} from '../../actions/user/userAction';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@mui/system';
import { connect } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Userlist() {



const [users, setUsers] = useState([])
const [active, setActive] = useState(false)
const [username, setUsername] = useState("")
const [open, setOpen] = useState(false);

const handleOpen = () =>{

    setOpen(true);
} 
const handleClose = () =>{
  setOpen(false);
  get_all_user()
} 
const get_all_user = ()=>{
  getAllUsers().then((res)=>{
  
    setUsers(res.data);
   
   
  }).catch((err)=>{
   console.log(err)
  })
}

  const history = useHistory();

  useEffect(() => {
  if(!(sessionStorage.getItem('lp_auth_token'))){
    history.push('/login');
  }
  

  get_all_user()
 
 
}, [])

var activeArr=[];

for(let i=0; i<users.length; i++)
{
  activeArr[i]=users[i].access;
}
console.log("actArr is ", activeArr);

const handleToggle =(access)=>
{
  access===true ?
  setActive(false):setActive(true)
}

 
  return (
    <div className='container'>{
      users.length === 0 ? 
          <Container>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          </Container>
    :
  <TableContainer component={Paper} style={{margin:"auto"}}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"black", color:"white"}}>
            <TableCell style={{color:"white",fontSize:"20px"}}>Name</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Phone No</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Email ID</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Details</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Active</TableCell>
          </TableRow>
        </TableHead>




        <TableBody>


          {
                 users.map((row,i) => {
           
            return(
              
              
          <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" style={{fontSize:"18px"}} scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.phoneNo}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.email}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
              <Button variant="contained" href={row.photoIdUrl}>View ID</Button>
              </TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
                <Button onClick={(e)=>{
                    handleOpen()
                    setActive(row.access)
                    console.log("active", active)
                    setUsername(row.phoneNo) }}>

             <Switch checked={row.access}
             color="success" />
              </Button>
              </TableCell>
            </TableRow>
)})


}
        </TableBody>
      </Table>
    </TableContainer> 
    }
     
  
    <Piecharts/>



     {/* activity confirmation */}
   

<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you want to change the access?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='secondary' variant='contained' onClick={handleClose}>Disagree</Button>
          <Button color='primary' variant='contained' onClick={()=>{
active===false ? activateUser(username) : deactivateUser(username) 

            handleClose()
            get_all_user()
            }}>Agree</Button>
        </DialogActions>
      </Dialog>
 
    </div>
  )
}
