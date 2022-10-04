import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function PageTitle(){
  return (
    <Stack direction="column" spacing='8px' alignItems='flex-start' maxWidth='450px' justifyContent='flex-start'>
      <Typography fontSize={45} align="left">Real estate dashboard monitoring</Typography>
      <Typography color='darkGrey' align="left">Analyse your real estate with graphs and stats</Typography>
    </Stack>
  )
}