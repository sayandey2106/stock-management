import React  from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { addNewWarehouse } from '../../actions/warehouse/warehouseAction';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

 
export default function CreateWarehouseModal() {
  const [whName, setWhName] = React.useState('');
  const [whAddress, setWhAddress]= React.useState('');
  const [whCapacity, setWhCapacity] = React.useState();
  const [contactPerson, setContactPerson] = React.useState();

  const handleChange = (event) => {
    // setProfitType(event.target.value);
  };

  const handleSubmit = () =>{
    addNewWarehouse(newWarehouse)
    setWhName("")
    setWhAddress("")
    setContactPerson()
    setWhCapacity()
  }

  let newWarehouse = {whName, whAddress, whCapacity, contactPerson};

  return (
    <div>
        <Box sx={style} component="form" 
        onSubmit={(e)=>{
        console.log("submit")
      e.preventDefault()
     whCapacity==="" || whCapacity===0 || whAddress==="" || contactPerson===0 ? alert("Enter all fields"):
     handleSubmit()
     
   
      }}>
        <div className='text-center'>

        <Typography m={2} variant="h4" component="h6"> 
            Create New Warehouse
        </Typography>
        <TextField id="standard-basic" label="Name" variant="standard" type="text"
        value={whName}
        autoComplete="off"
        onChange={(e)=>{
          setWhName(e.target.value);
        }}
        style={{marginTop:"9px"}}
        />
           <TextField id="standard-basic" label="Address" variant="standard" type="text"
        value={whAddress}
        autoComplete="off"
        onChange={(e)=>{
          setWhAddress(e.target.value);
        }}
        style={{marginTop:"9px"}}
        />
        <TextField id="standard-basic" label="Capacity" variant="standard" type='number'
        value={whCapacity}
        onChange={(e)=>{
          setWhCapacity(e.target.value)
        }}
       style={{marginTop:"9px"}}
        />
        <TextField id="standard-basic" label="Contact Person" variant="standard" type='number'
        value={contactPerson}
        onChange={(e)=>{
          setContactPerson(e.target.value)
        }}
        style={{marginTop:"9px"}}
        />
        <Box my={2}>
       <Button variant='contained' type="submit" >Submit</Button>
       </Box>
        </div>
        </Box>
    </div>
  )
}

