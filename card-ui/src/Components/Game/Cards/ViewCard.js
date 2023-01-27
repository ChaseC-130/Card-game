import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
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

export default function ViewCard({name, text, open, handleClose, inHand}) {
  
  const [img, setImg] = React.useState("");

  React.useEffect(() => {
    setImg(`../imgs/` + name.split(' ').join('') + `.png`);    
  }, [name])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {name}
          </Typography>
          <CardMedia
          component="img"
          height="300"
          image={img}
          alt={name}
        />
          <Typography id="modal-modal-description" sx={{ fontSize: 16, mt: 2 }}>
            {text}
          </Typography>
          {inHand && <Button variant="contained" sx={{mt: 2, height: '25%', width: '100%'}}>Play Card</Button>}
        </Box>
      </Modal>
    </div>
  );
}