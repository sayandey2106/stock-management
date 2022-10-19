import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
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
import { deleteType, getAllType } from '../../actions/type/typeAction';
import Skeleton from '@mui/material/Skeleton';
import EditTypeModal from '../modals/editTypeModal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CreateWarehouseModal from '../modals/createWarehouseModal';
import { getAllshop } from '../../actions/shop/shopAction';
import { deleteWarehouse, getAllWarehouse } from '../../actions/warehouse/warehouseAction';
import EditWarehouseModal from '../modals/editWarehouseModal';

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Warehouse()  {


    const get_all_warehouse = ()=>{
        getAllWarehouse().then((res)=>{
      
          setWarehouses(res.data);
           console.log(warehouses)
           
          }).catch((err)=>{
           console.log(err)
          })
    }
    useEffect(() => {
        
      get_all_warehouse()
    
    }, [])


    const [typeName, setTypeName]= useState("")
    const[id, setId] = useState();
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [warehouses, setWarehouses] = useState([])
    const [whName, setWhName] = React.useState('');
    const [whAddress, setWhAddress]= React.useState('');
    const [whCapacity, setWhCapacity] = React.useState();
    const [contactPerson, setContactPerson] = React.useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{
      get_all_warehouse()
        setOpen(false);

    }

    const handleEditOpen = () => setOpenEdit(true);
    const handleEditClose = () =>{
      get_all_warehouse()
        setOpenEdit(false);

    }


    
    const handleDeleteOpen = () => setOpenDelete(true);
    const handleDeleteClose = () =>{
      get_all_warehouse()
        setOpenDelete(false);
        
    }

    const handleDelete = () =>{
        
        deleteWarehouse(id)
    }
    
    return (


      <div>
       {
        warehouses.length===0 ? 
        <Container>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </Container> 
        :

          <Container className="my-4">
  
        <Box>

    <Button variant="contained" className='m-1' onClick={handleOpen}>Add Warehouse</Button>
  
        </Box>
        <TableContainer component={Paper} style={{marginTop:"30px"}}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor:"black", color:"white"}}>
              <TableCell style={{color:"white",fontSize:"20px"}}>Name</TableCell>
              <TableCell style={{color:"white",fontSize:"20px"}} align="center">Name</TableCell>
              <TableCell style={{color:"white",fontSize:"20px"}} align="center">Address</TableCell>
              <TableCell style={{color:"white",fontSize:"20px"}} align="center">Capacity</TableCell>
              <TableCell style={{color:"white",fontSize:"20px"}} align="center">Contact Person</TableCell>
              <TableCell style={{color:"white",fontSize:"20px"}} align="center">Action</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {warehouses.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" style={{fontSize:"18px"}} scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center" style={{fontSize:"18px"}}>{row.whName}</TableCell>
                <TableCell align="center" style={{fontSize:"18px"}}>{row.whAddress}</TableCell>
                <TableCell align="center" style={{fontSize:"18px"}}>{row.whCapacity}</TableCell>
                <TableCell align="center" style={{fontSize:"18px"}}>{row.contactPerson}</TableCell>
                <TableCell align="center" style={{fontSize:"18px"}}>
                <IconButton color="primary" aria-label="add to shopping cart">
                      <EditIcon onClick={()=>{
                        setId(row.id)
                        setWhAddress(row.whAddress);
                        setWhName(row.whName);
                        setContactPerson(row.contactPerson);
                        setWhCapacity(row.whCapacity)
                        handleEditOpen();
                      }}/>
                  </IconButton>
                  <IconButton  aria-label="delete">
                      <DeleteIcon onClick={()=>{
                        handleDeleteOpen()
                        setId(row.id)

                      }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
          </Container>
       }
     
          


              {/* add new type modal */}
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

            <CreateWarehouseModal/>
          </Box>
         
        </Fade>
      </Modal>

      {/* edit type modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEdit}>
          <Box>

            <EditWarehouseModal id={id} whAddress={whAddress} whName={whName} contactPerson={contactPerson} whCapacity={whCapacity}  />
          </Box>
         
        </Fade>
      </Modal>


      {/* delete type */}

    <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDeleteClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you  want to delete this type?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='secondary' variant='contained' onClick={handleDeleteClose}>Disagree</Button>
          <Button color='primary' variant='contained'  onClick={()=>{
            handleDelete()
            handleDeleteClose()
            }}>Agree</Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
  
