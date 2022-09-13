import React  from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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

  const currencies = [
    {
      value: 'USD',
      label: 'hgfshad',
    },
    {
      value: 'EUR',
      label: 'sadsa',
    },
    {
      value: 'BTC',
      label: 'sad',
    },
    {
      value: 'JPY',
      label: 'sada',
    },
  ];
export default function CreateQualityModal() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <Box sx={style} component="form">
        <Typography m={2} variant="h4" component="h6">
            Create New Quality
        </Typography>
        <TextField size="small" margin="normal" id="outlined-size-small" type='text' label="Outlined" variant="outlined" />
        <Box sx={{ minWidth: 120 }}>
        <div className='m-3'> 

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        margin="normal"
        >
        <FormControlLabel value="female" mx={2} control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        
      </RadioGroup>
        </div>
    </Box>
        <TextField size="small" margin="normal" id="outlined-size-small" type='text' label="Outlined" variant="outlined" />
        </Box>
    </div>
  )
}
