import React , {useState,useEffect} from 'react'
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
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CreateQualityModal from '../modals/createQualityModal';
import Skeleton from '@mui/material/Skeleton';
import UNIVERSAL from '../../config/config';
import moment from 'moment';
import axios from 'axios';
import { getAllQuality,deleteQuality } from '../../actions/quality/qualityAction';
import EditQualityModal from '../modals/editQualityModal';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,

   
  } from '@material-ui/core';
  import { Close } from '@material-ui/icons';

export default function Quality() {



    const [qualities, setQualities]= useState([])

const get_all_quality = ()=>{
    getAllQuality().then((res)=>{
  
        setQualities(res.data);
       console.log(qualities)
       
      }).catch((err)=>{
       console.log(err)
      })
}


useEffect(() => {
    
    get_all_quality()

}, [])

console.log(qualities)


const [name, setName] = useState("");
const [qualityType,setQualityType] = useState('');
const [profit,setProfit]= useState(0);
const [id, setId] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = () =>{

        setOpen(true);
    } 
    const handleClose = () =>{
        get_all_quality()
        setOpen(false);
    } 
    
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () =>{

        setOpenEdit(true);
    } 
    const handleCloseEdit = () =>{
        get_all_quality()
        setOpenEdit(false);
    }


    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete= () =>{

        setOpenDelete(true);
    } 
    const handleCloseDelete = () =>{
        get_all_quality()
        setOpenDelete(false);
    }
    const handleDelete = () =>{
        deleteQuality(id)
        get_all_quality()
        
    }
    return (
        <div>

        {
            qualities.length===0 ?
            <Container>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            </Container> :


            <Container>

                <Box>
                    <Button variant="contained" className='m-1' type="button" onClick={handleOpen}>Create New Quality</Button>
                </Box>
                <TableContainer component={Paper} style={{ marginTop: "30px" }}>
                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "black", color: "white" }}>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Name</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Profit</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Action</TableCell>
                            </TableRow>
                          
                            
                        </TableHead>
                        <TableBody>
                            {qualities.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    
                                    <TableCell align="center" style={{ fontSize: "18px" }}>{row.qualityName}</TableCell>
                                    <TableCell align="center" style={{ fontSize: "18px" }}>{row.profitType==="Percentage"?row.profitValue+" %":"Rs "+row.profitValue}</TableCell>
                                    <TableCell align="center" style={{ fontSize: "18px" }}>
                                        <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>{
                                            setName(row.qualityName);
                                            setProfit(row.profitValue);
                                            setQualityType(row.profitType)
                                            handleOpenEdit();
                                            setId(row.id)
                                        }}>
                                            <EditIcon />
                                            
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon onClick={()=>{
                                              handleOpenDelete()
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



            {/*  create quality modal details */}

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

            <CreateQualityModal/>
          </Box>
         
        </Fade>
            </Modal>

  {/*  edit quality modal details */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleCloseEdit}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEdit}>
          <Box>

            <EditQualityModal name={name} profit={profit} qualityType={qualityType} id={id}/>
          </Box>
         
        </Fade>
      </Modal>

        {/* delete confirmation */}
        <Dialog open={openDelete} maxWidth="sm" fullWidth>
      <DialogTitle>Are you sure?</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton>
          <Close onClick={handleCloseDelete} />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>You want to delete this quality?</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleCloseDelete}>
          Cancel
        </Button>
        <Button color="secondary" variant="contained" onClick={()=>{
            handleDelete()
            handleCloseDelete()
            }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
        </div>
    )
}



