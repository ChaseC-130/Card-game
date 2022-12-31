import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Hand from '../Cards/Hand';
import OpponentHand from '../Cards/OpponentHand';
import Decklist from '../Cards/Decklist';
import ViewCard from '../Cards/ViewCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Board() {

    const [name, setName] = React.useState("");
    const [text, setText] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [inHand, setInHand] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    
  return (
    <>
    <ViewCard inHand={inHand} name={name} text={text} open={open} handleClose={handleClose} />
    <Decklist setInHand={setInHand} setText={setText} setName={setName} handleOpen={handleOpen} />
    <Box sx={{ flexGrow: 1, ml: '100px'}}>
        
      <Grid container spacing={2}>
        <Grid xs={12}>
          <OpponentHand />
        </Grid>
        <Grid xs={12} sx={{
            position: 'absolute',
            bottom: 0,
            
        }}>
            <Hand setInHand={setInHand} setText={setText} setName={setName} handleOpen={handleOpen} />
      </Grid>
      </Grid>
    </Box>
    </>
  );
}