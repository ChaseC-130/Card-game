import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Cards from './Cards';
import Typography from '@mui/material/Typography';
import EmptyCard from './EmptyCard';
import {SocketContext} from '../../../App';



export default function OpponentHand() {


  const [enemyHand, setEnemyHand] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [enemyCards, setEnemyCards] = React.useState([]);

  const socket = React.useContext(SocketContext);

  React.useEffect(() => {
    socket.on(("enemyvisible"), (arg) => {
      setVisible(true);
      setEnemyCards(arg);
    })
  })

  React.useEffect(() => {
    socket.on(("enemyhand"), (arg) => {
      setVisible(false);
      setEnemyHand(arg);
    })
  })

/*
  React.useEffect(() => {
    setHand([]);
    for (let i = 0; i < 7; i++) {
        setHand(prevArr => [...prevArr, <Grid><Cards width={width} setInHand={setInHand} setViewName={setName} setViewText={setText} handleOpen={handleOpen} /></Grid>])
    }
}, [])
*/

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      {visible ? <Grid xs={2}><EmptyCard /></Grid> :
      enemyHand.map(() => {
      <Grid xs={2}><EmptyCard /></Grid>    
})}
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2}>
      <Typography>Opponent's Hand</Typography>
      </Grid>
    </Box>
  );
}