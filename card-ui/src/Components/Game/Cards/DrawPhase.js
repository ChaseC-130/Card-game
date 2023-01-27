import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import {SocketContext} from '../../../App';
import { DEFAULT_COLOR_SCHEME_STORAGE_KEY } from '@mui/system/cssVars/getInitColorSchemeScript';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DrawPhase({open, cost, setOpen}) {
  
  
  const socket = React.useContext(SocketContext);

  /*
  React.useEffect(() => {
    socket.on(("handchange"), (arg) => {
      setHand(arg);
    })
  })
*/

  const handleClose = () => {
    setOpen(false);
  }

  const handleDraw = () => {
    socket.emit("drawCard");
    handleClose();
  }

  const handleTutor = () => {
    socket.emit("tutorCard");
    handleClose();
  }

  /*
  React.useEffect(() => {
    setImg(`../imgs/` + name.split(' ').join('') + `.png`);    
  }, [name])
*/


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button variant="contained" onClick={handleDraw} sx={{mt: 2, height: '25%', width: '100%'}}>Tutor Card Cost: {cost}</Button>
          <Button variant="contained" onClick={handleTutor} sx={{mt: 2, height: '25%', width: '100%'}}>Draw Card</Button>
        </Box>
      </Modal>
    </div>
  );
}