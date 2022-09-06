import React from 'react';
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
import Piecharts from '../piecharts/piecharts';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 1591232345, "sayand@ghjsa", 24, 4.0),
    createData('Ice cream sandwich', 2371232345, "sayand@ghjsa.sd", 37, 4.3),
    createData('Eclair', 2621232345, "sayand@ghjsa.cg", 24, 6.0),
    createData('Cupcake', 3051232345, "sayand@ghjsas", 67, 4.3),
    createData('Gingerbread', 3561232345, "sayand@ghjsa.cpm", 49, 3.9),
  ];

  //toggle button

  //toggle button

export default function Userlist() {
  return (
    <div className='container'>
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" style={{fontSize:"18px"}} scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.calories}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.fat}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
              <Button variant="contained">View ID</Button>
              </TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
              <Switch  defaultChecked color="success" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Piecharts/>
    </div>
  )
}
