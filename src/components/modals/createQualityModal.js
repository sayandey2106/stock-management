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

 
export default function CreateShopModal() {
  const [profitType, setProfitType] = React.useState('');
  const [qualityName, setQualityName]= React.useState('');
  const [profitValue, setProfitValue] = React.useState(0);

  const handleChange = (event) => {
    setProfitType(event.target.value);
  };

  const handleSubmit = () =>{
    addNewQuality(newQuality);
  }

  let newQuality = {qualityName,profitType,profitValue};

  return (
    <div>
        <Box sx={style} component="form" 
        onSubmit={(e)=>{
        console.log("submit")
      e.preventDefault()
     profitType==="" || qualityName==="" ? alert("Enter all fields"):
     handleSubmit()
      setProfitType("")
      setQualityName("")
      setProfitValue(0)
   
      }}>
        <div className='text-center'>

        <Typography m={2} variant="h4" component="h6"> 
            Create New Quality
        </Typography>
        <TextField id="standard-basic" label="Quality Name" variant="standard" type="text"
        value={qualityName}
        autoComplete="off"
        onChange={(e)=>{
          setQualityName(e.target.value);
        }}
        />
        <Box sx={{}} ml={3} my={2}>
   

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        margin="normal"
        value={profitType}
        onChange={handleChange}
        >
        <FormControlLabel value="Percentage" control={<Radio />} label="Percentage" />
        <FormControlLabel value="Amount"  control={<Radio />} label="Amount" />
        
      </RadioGroup>
        
    </Box>
        <TextField id="standard-basic" label="Profit" variant="standard" type='number'
        value={profitValue}
        onChange={(e)=>{
          setProfitValue(e.target.value)
        }}
        />
        <Box my={2}>
       <Button variant='contained' type="submit" >Submit</Button>
       </Box>
        </div>
        </Box>
    </div>
  )
}
