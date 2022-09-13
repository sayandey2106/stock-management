import React,{useEffect} from 'react'
import { Button,ButtonGroup } from '@mui/material'
import { Container,Box } from '@mui/system'
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton';
import Quality from './Quality';
import Types from './Types';
import { LG_Cont } from '../../containers/router/Lg_Cont';
import { useHistory } from 'react-router-dom';
function createData(name, type, quality, cp, sp ) {
    return { name, type, quality, cp, sp };
  }
  
  const rows = [
    createData('Frozen yoghurt', "Kurti", "Premium", 24, 40),
    createData('Ice cream sandwich', "Blouse", "Premium", 37, 43),
    createData('Eclair', "Blouse", "Medium", 24, 60),
    createData('Cupcake', "Saree", "Medium", 67, 43),
    createData('Gingerbread', "Saree", "Low", 49, 39),
  ];
  
export default function Products() {
  const history = useHistory();
  useEffect(() => {
  if(!(localStorage.getItem('lp_auth_token'))){
    history.push('/login');
  }
  }, [])
  
  return (
    <div>
      <div  className="my-4">

<Quality/>
      </div>
      <div  className="my-4">
<Types/>
      </div>
        <Container className="my-4">
<LG_Cont/>
      <Box>

  <Button variant="contained" className='m-1'> Create New Type</Button>
  <Button variant="contained" className='m-1'>Add Product</Button>

      </Box>
      <TableContainer component={Paper} style={{marginTop:"30px"}}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"black", color:"white"}}>
            <TableCell style={{color:"white",fontSize:"20px"}}>Name</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Type</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Quality</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Cost Price</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Sell Price</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Action</TableCell>
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
              <TableCell align="center" style={{fontSize:"18px"}}>{row.type}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.quality}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.cp}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.sp}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
              <IconButton color="primary" aria-label="add to shopping cart">
                    <EditIcon />
                </IconButton>
                <IconButton  aria-label="delete">
                    <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
        
    </div>
  )
}
