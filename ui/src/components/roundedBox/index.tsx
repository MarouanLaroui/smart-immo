import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Box } from "@mui/system";
import React from "react";
import Icon from '@mui/material/Icon';

<Icon>star</Icon>;


export default function RoundedBox
(props: {
  iconName: string
}){
  return (
    <Stack 
      paddingX='40px' 
      paddingY='40px' 
      border='solid 1px' 
      borderRadius='25px'
      width={{xl:"180px", sm:"117px"}}
      height={{xl:"180px", sm:"117px"}}
      // sx={{backgroundColor:'red'}}
      direction='column'
      justifyContent='space-between'
      >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography fontSize={25}>Estate</Typography>
          <Icon fontSize="large">add_circle</Icon>
        </Stack>

        <Stack direction='row' justifyContent='space-between' alignItems='flex-end'>
          <Typography fontSize={50} fontWeight={550} paddingBottom={0}>56</Typography>
          <Typography paddingBottom='15px'>Test</Typography>
        </Stack>

    </Stack>
  )
}