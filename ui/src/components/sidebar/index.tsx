import SettingsIcon from '@mui/icons-material/Settings';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Stack } from "@mui/system";
import { Button, Collapse, Fade, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';

export default function Sidebar(){
  const sidebarHiddenWidth = 70;
  const [isSideBarHidden, setSideBarHidden] = useState<boolean>(true);
  
  const getSideBarWidth = () =>{
    return isSideBarHidden? sidebarHiddenWidth : 180
  }

  return (
    <Stack 
      justifyContent='space-between' 
      paddingY='60px'
      height='89vh' 
      direction='column'
      paddingX='20px'
      sx={{background:'#282c34'}}
      >

        <Stack direction='row' alignItems='center' spacing='10px' width='100%' >
          <Tooltip title="Account">
            <AccountCircleIcon fontSize="large" sx={{"&:hover": {color:"#ADD8E6"},color:'#A9A9A9'}}/>
          </Tooltip>
          
      </Stack>
      

      <Stack spacing='30px'  direction='column'>

        <Tooltip title="Stats" >
          <BarChartIcon fontSize="large" sx={{"&:hover": {color:"#ADD8E6"},color:'#A9A9A9'}} />
        </Tooltip>
          
        
        <Tooltip title="Estate" >
          <ApartmentIcon fontSize="large" sx={{"&:hover": {color:"#ADD8E6"},color:'#A9A9A9'}}/>
        </Tooltip>
          
        <Tooltip title="Dashboard">
          <BarChartIcon fontSize="large" sx={{"&:hover": {color:"#ADD8E6"},color:'#A9A9A9'}}/>
          </Tooltip>

        
      </Stack>
          <Tooltip title="Settings" sx={{fontSize: '50px'}}>
            <SettingsIcon fontSize="large" sx={{"&:hover": {color:"#ADD8E6"},color:'#A9A9A9'}}/>
          </Tooltip>
          
      
    </Stack>
 
//<Tooltip title="Delete"></Tooltip>
    
    // <Collapse 
    //   sx={{background:'#282c34'}}
    //   orientation="horizontal"
    //   in={!isSideBarHidden} 
    //   collapsedSize={sidebarHiddenWidth}
    //   onMouseEnter={()=>{
    //     setSideBarHidden(false);
    //   }}
    //   onMouseLeave={
    //     ()=>{
    //       setSideBarHidden(true);
    //     }
    //   }
    // >
      
    // <Stack 
    //   justifyContent='space-between' 
    //   paddingY='60px'
    //   height='89vh' 
    //   direction='column'
    //   width='200px'
    //   paddingLeft='20px'
    //   >

    //     <Stack direction='row' alignItems='center' spacing='10px' width='100%' >
    //       <AccountCircleIcon fontSize="large" sx={{color:'#A9A9A9'}}/>
    //       <Typography fontWeight={700} fontSize={20} color='#A9A9A9'>Estate</Typography>
    //   </Stack>
      

    //   <Stack spacing='30px'  direction='column'>

    //     <Stack direction='row' alignItems='center' spacing='10px' width='100%'>
    //       <BarChartIcon fontSize="large" sx={{color:'#A9A9A9'}} />
    //       <Typography fontWeight={700} fontSize={20} color='#A9A9A9'>Dashboard</Typography>
          
    //     </Stack>

    //     <Stack direction='row' alignItems='center' spacing='10px'>
    //       <ApartmentIcon fontSize="large" sx={{color:'#A9A9A9'}}/>
    //       <Typography fontWeight={700} fontSize={20} color='#A9A9A9'>Estate</Typography>
    //     </Stack>

    //     <Stack direction='row' alignItems='center' spacing='10px'>
    //       <BarChartIcon fontSize="large" sx={{color:'#A9A9A9'}}/>
    //       <Typography fontWeight={700} fontSize={20} color='#A9A9A9'>Testing</Typography>
    //     </Stack>
        
    //   </Stack>

    //   <Stack direction='row' alignItems='center' spacing='10px'>
    //       <SettingsIcon fontSize="large" sx={{color:'#A9A9A9'}}/>
    //       <Typography fontWeight={700} fontSize={20} color='#A9A9A9'>Settings</Typography>
    //   </Stack>
      
    // </Stack>
    
    // </Collapse>
    
  )
}