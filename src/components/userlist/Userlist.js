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
import { getAllUsers , activateUser} from '../../actions/user/userAction';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@mui/system';
import { connect } from 'react-redux';



export default function Userlist() {



  let res;
const [users, setUsers] = useState([])
const [active, setActive] = useState(false)
const [loader, setLoader] = useState(false)


  const history = useHistory();

  useEffect(() => {
  if(!(sessionStorage.getItem('lp_auth_token'))){
    history.push('/login');
  }
  

 getAllUsers().then((res)=>{
  
   setUsers(res.data);
  
  
 }).catch((err)=>{
  console.log(err)
 })
 
 
}, [])

var activeArr=[];

for(let i=0; i<users.length; i++)
{
  activeArr[i]=users[i].access;
}
console.log("actArr is ", activeArr);

const handleToggle =(e,phnNo)=>
{
  // activateUser(9681253017);
  setActive(e.target.checked)
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
              key={row.fullName}
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
             <Switch checked={activeArr[i]}
              onChange={(e)=>{handleToggle(e,row.phoneNo)}}  color="success" />
              </TableCell>
            </TableRow>
)})


}
        </TableBody>
      </Table>
    </TableContainer> 
    }
     
  
    <Piecharts/>
    </div>
  )
}
