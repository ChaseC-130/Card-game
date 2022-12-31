import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Cards from './Cards';
import Typography from '@mui/material/Typography';


export default function Hand({handleOpen, setInHand, setName, setText}) {

    const [hand, setHand] = React.useState([]);


    React.useEffect(() => {
        setHand([]);
        for (let i = 0; i < 5; i++) {
            setHand(prevArr => [...prevArr, <Grid xs={2}><Cards setInHand={setInHand} setViewName={setName} setViewText={setText} handleOpen={handleOpen} /></Grid>])
        }
    }, [])


  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Typography>Your Hand</Typography>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      {hand}
      </Grid>
  
    </Box>
  );
}