import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup } from '@mui/material'
import { Container, Box } from '@mui/system'
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
import { set_home } from '../../actions/loginActions';
import IconButton from '@mui/material/IconButton';
import CreateTypeModal from '../modals/createTypeModal';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { getAllType } from '../../actions/type/typeAction';
import Skeleton from '@mui/material/Skeleton';


export default function Types() {
    const [types, setTypes]= useState([])
    
    const get_all_type = ()=>{
        getAllType().then((res)=>{
      
            setTypes(res.data);
           console.log(types)
           
          }).catch((err)=>{
           console.log(err)
          })
    }
    
    
    useEffect(() => {
        
        get_all_type()
    
    }, [])
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{

        setOpen(false);
        get_all_type();
    }
  return (
    <div>



{
    types.length===0 ?
    <Container>
    <Skeleton />
    <Skeleton animation="wave" />
    <Skeleton animation={false} />
    </Container> 
    :
    <Container>

<Box>
    <Button variant="contained" className='m-1' onClick={handleOpen}>Create New Type</Button>
</Box>
<TableContainer component={Paper} style={{ marginTop: "30px" }}>
    <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
            <TableRow style={{ backgroundColor: "black", color: "white" }}>
                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Name</TableCell>
                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Quantity</TableCell>
                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Action</TableCell>
            </TableRow>
          
            
        </TableHead>
        <TableBody>
            {types.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    
                    <TableCell align="center" style={{ fontSize: "18px" }}>{row.typeName}</TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>{row.quantity}</TableCell>
                    <TableCell align="center" style={{ fontSize: "18px" }}>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
</Container>
}





<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box>

            <CreateTypeModal/>
          </Box>
         
        </Fade>
      </Modal>
    </div>
  )
}
