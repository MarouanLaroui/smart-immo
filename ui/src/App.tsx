import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import { Stack } from '@mui/system';
import RoundedBox from './components/roundedBox';
import { Box, Grid } from '@mui/material';
import PageTitle from './components/pageTitle';

function App() {
  return (
      <Stack direction='row' height='100%' width='100%' >
        <Sidebar/>
        <Stack direction={{lg:'row', md:'column'}} height='100%' width='100%' paddingX="3%" paddingTop="2%" spacing='50px'>
          <Stack width={{lg:'60%', sm :'100%'}} direction='column' spacing='20px'>
            <PageTitle></PageTitle>
            <Grid  sx={{width:'100%'}} container direction='row' justifyContent='space-between'>
              <RoundedBox iconName='add_circle'/>
              <RoundedBox iconName='add_circle'/>
              <RoundedBox iconName='add_circle'/>
            </Grid>
          </Stack>

          <Stack sx={{width:'40%'}} direction='column'>
            <img src='buildings.jpeg' alt="Problem with img"></img>
            <Box width='100%' sx={{border:"1px solid red", height:'30px'}} ></Box>
            <Box width='100%' sx={{border:"1px solid red",height:'30px'}}></Box>
            <Box width='100%' sx={{border:"1px solid red",height:'30px'}}></Box>
          </Stack>
        </Stack>
      </Stack>

  );
}

export default App;
