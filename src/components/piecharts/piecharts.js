import React, {useState, useEffect} from 'react'
import Chart from "react-apexcharts";
import { Card, Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function Piecharts() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  return (
    <div>
      <Grid container spacing={8} className="my-4">
  <Grid item xs={12} md={6} lg={6}>
   
    <Card>

          <Chart
              options={ {
                labels: ['Kurti', 'Saree', 'blouse', 'skirt']}}
                series={ [44, 55, 13, 33]}
                type="pie"
                width={windowSize.innerWidth<=500 ? 350 : 500}
                height={1000}
                />
                </Card>
             
  </Grid>
  <Grid item xs={12} md={6} lg={6}>
           <Card>

           <Chart
                options={ {
                  labels: ['Premium', 'medium', 'low']}}
                  series={ [44, 55, 13]}
                  type="pie"
                  width={windowSize.innerWidth<=500 ? 350 : 500}
                  height={1000}
                  />
            </Card>
  </Grid>
</Grid>
  
    </div>
  )
}
