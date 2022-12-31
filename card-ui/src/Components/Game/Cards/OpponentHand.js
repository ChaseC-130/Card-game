import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Cards from './Cards';
import Typography from '@mui/material/Typography';
import EmptyCard from './EmptyCard';


export default function OpponentHand() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Grid xs={2}><EmptyCard /></Grid>
      <Grid xs={2}><EmptyCard /></Grid>
      <Grid xs={2}><EmptyCard /></Grid>
      <Grid xs={2}><EmptyCard /></Grid>
      <Grid xs={2}><EmptyCard /></Grid>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Typography>Opponent's Hand</Typography>
      </Grid>
    </Box>
  );
}