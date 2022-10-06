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
import { addNewType } from '../../actions/type/typeAction';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

 
export default function CreateTypeModal() {
  
  const [productTypeName, setProductTypeName]= React.useState('');
  let newType = {productTypeName};

 
  const handleSubmit = () =>{
    addNewType(newType);
  }

  
  return (
    <div>
        <Box sx={style} component="form" ml={5} 
        onSubmit={(e)=>{
        console.log("submit")
      e.preventDefault()
      handleSubmit()
    setProductTypeName("")

      }}>
        <div className='text-center'>


        <Typography m={2} variant="h4" component="h6"> 
            Create New Type
        </Typography>
        <TextField id="standard-basic" label="Quality Name" variant="standard" type="text"
        value={productTypeName}
        autoComplete="off"
        onChange={(e)=>{
          setProductTypeName(e.target.value);
        }}
        />
        <Box sx={{ minWidth: 120 }} mt={3} mb={2}>
   

        
    </Box>
       
        <Box m={3}>
       <Button variant='contained' type="submit" >Submit</Button>
       </Box>
        </div>
        </Box>
    </div>
  )
}
