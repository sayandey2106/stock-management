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
import { addNewQuality } from '../../actions/quality/qualityAction';
import { addNewShop } from '../../actions/shop/shopAction';


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

 
export default function CreateQualityModal() {
  const [shName, setShName] = React.useState('');
  const [shAddress, setShAddress]= React.useState('');
  const [shCapacity, setShCapacity] = React.useState();
  const [contactPerson, setContactPerson] = React.useState();

  const handleChange = (event) => {
    // setProfitType(event.target.value);
  };

  const handleSubmit = () =>{
    addNewShop(newShop)
    setShName("")
    setShAddress("")
    setContactPerson()
    setShCapacity()
  }

  let newShop = {shName, shAddress, shCapacity, contactPerson};

  return (
    <div>
        <Box sx={style} component="form" 
        onSubmit={(e)=>{
        console.log("submit")
      e.preventDefault()
     shCapacity==="" || shCapacity===0 || shAddress==="" || contactPerson===0 ? alert("Enter all fields"):
     handleSubmit()
     
   
      }}>
        <div className='text-center'>

        <Typography m={2} variant="h4" component="h6"> 
            Create New Shop
        </Typography>
        <TextField id="standard-basic" label="Name" variant="standard" type="text"
        value={shName}
        autoComplete="off"
        onChange={(e)=>{
          setShName(e.target.value);
        }}
        style={{marginTop:"9px"}}
        />
           <TextField id="standard-basic" label="Address" variant="standard" type="text"
        value={shAddress}
        autoComplete="off"
        onChange={(e)=>{
          setShAddress(e.target.value);
        }}
        style={{marginTop:"9px"}}
        />
        <TextField id="standard-basic" label="Capacity" variant="standard" type='number'
        value={shCapacity}
        onChange={(e)=>{
          setShCapacity(e.target.value)
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
