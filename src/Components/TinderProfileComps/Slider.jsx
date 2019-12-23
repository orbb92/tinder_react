import React from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
 
  const [value, setValue] = React.useState([20, 80]);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
   
  };
  
props.filterfun(value)
 

  return (
      
    
    <div style={{width:'40%',margin:'auto'}} >
      <Typography id="range-slider" gutterBottom>
          {props.name}
      </Typography>
    
      <Slider 
    
        value={value}
        onChange={handleChange}
       
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}