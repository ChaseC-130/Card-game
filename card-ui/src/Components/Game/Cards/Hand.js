import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Cards from './Cards';
import DrawPhase from './DrawPhase';
import Typography from '@mui/material/Typography';
import {SocketContext} from '../../../App';


export default function Hand({handleOpen, setInHand, setName, setText}) {

    const [hand, setHand] = React.useState([]);
    const [drawPhase, setDrawPhase] = React.useState(false);
    const [drawCost, setDrawCost] = React.useState(2);

    const [width, setWidth] = React.useState(150);
    const socket = React.useContext(SocketContext);

    React.useEffect(() => {
      socket.on(("handchange"), (arg) => {
        setHand(arg);
      })
    })

    React.useEffect(() => {
        setHand([]);
        for (let i = 0; i < 7; i++) {
            setHand(prevArr => [...prevArr, <Grid><Cards width={width} setInHand={setInHand} setViewName={setName} setViewText={setText} handleOpen={handleOpen} /></Grid>])
        }
    }, [])
    
    React.useEffect(() => {
      setWidth(200);
      if (hand.length < 10) {
        //setWidth(200 - (hand.length * 10))
      } else {
        //setWidth(50);
      }
      
    }, [hand])


  return (
    <Box sx={{ flexGrow: 1 }}>
    <DrawPhase open={drawPhase} cost={drawCost} />
    <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Typography>Your Hand</Typography>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      {hand}
      </Grid>
  
    </Box>
  );
}