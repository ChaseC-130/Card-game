import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ActiveCard from './ActiveCard';
import Typography from '@mui/material/Typography';


export default function Hand() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Grid xs={2}><ActiveCard /></Grid>
      <Grid xs={2}><ActiveCard /></Grid>
      <Grid xs={2}><ActiveCard /></Grid>
      <Grid xs={2}><ActiveCard /></Grid>
      <Grid xs={2}><ActiveCard /></Grid>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Typography>Your's Hand</Typography>
      </Grid>
    </Box>
  );
}