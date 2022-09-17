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

function createData(name, quantity, profit) {
    return { name, quantity, profit };
}


const rows = [
    createData('Premium', 60, 20),
    createData('Good', 50, 15),
    createData('Low', 24, 60),
];

export default function Quality() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Container>

                <Box>
                    <Button variant="contained" className='m-1' type="button" onClick={handleOpen}>Create New Quality</Button>
                </Box>
                <TableContainer component={Paper} style={{ marginTop: "30px" }}>
                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "black", color: "white" }}>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Name</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Profit(in %)</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="center">Action</TableCell>
                            </TableRow>
                          
                            
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    
                                    <TableCell align="center" style={{ fontSize: "18px" }}>{row.name}</TableCell>
                                    <TableCell align="center" style={{ fontSize: "18px" }}>{row.profit}</TableCell>
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
        </div>
    )
}



// import { DataGrid } from '@mui/x-data-grid';
// import Box from '@mui/material/Box';
// // import { Container } from '@mui/system';
// import { Container } from '@mui/material';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//       field: 'firstName',
//       headerName: 'First name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'lastName',
//       headerName: 'Last name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 110,
//       editable: true,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];


//   export default function Quality(){

//     return(
// <div>
//     <Container>


//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[3]}
//         checkboxSelection
//         disableSelectionOnClick
//         experimentalFeatures={{ newEditingApi: true }}
//         sx={{ height: 400, width: '100%' , backgroundColor:"white"}}
//         />
  
//         </Container>
// </div>
//     );
//   }