import React, {useState, useEffect} from 'react'
import Chart from "react-apexcharts";
import { Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import './piecharts.css'
export default function Piecharts() {
 return (
    <div>
      <div className="desktop-chart">
     <Grid container spacing={8}  className="my-5">
  <Grid item xs={12} md={6} lg={6}>
   
    <Card style={{height:"400px",padding:"20px"}}>

          <Chart
              options={ {
                labels: ['Kurti', 'Saree', 'blouse', 'skirt']}}
                series={ [44, 55, 13, 33]}
                type="pie"
                width={500}
                height={1000}
              
                />
      </Card>
             
  </Grid>
  <Grid item xs={12} md={6} lg={6}>
           <Card style={{height:"400px", padding:"20px"}}>

           <Chart
                options={ {
                  labels: ['Premium', 'medium', 'low']}}
                  series={ [44, 55, 13]}
                  type="pie"
                  width={500}
                  height={1000}
                 
                  />
            </Card>
            
  </Grid>
</Grid>
</div>
<div className='mobile-chart'>

<Grid container spacing={8}  className="my-3">
  <Grid item xs={12} md={6} lg={6}>
   
    <Card style={{padding:"10px"}}>

          <Chart
              options={ {
                labels: ['Kurti', 'Saree', 'blouse', 'skirt']}}
                series={ [44, 55, 13, 33]}
                type="pie"
                width={350}
                height={1000}
              
                />
                </Card>
             
  </Grid>
  <Grid item xs={12} md={6} lg={6}>
           <Card style={{padding:"10px"}}>

           <Chart 
                options={ {
                  labels: ['Premium', 'medium', 'low']}}
                  series={ [44, 55, 13]}
                  type="pie"
                  width={350}
                  height={1000}
                 
                  />
            </Card>
            
  </Grid>
</Grid>
</div>
    </div>
  )
}
