import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myJson from '../CardIdeas.json';


export default function Cards({handleOpen, setInHand, setViewName, setViewText, width}) {


  function open() {
    setInHand(true);
    setViewName(name);
    setViewText(text);
    handleOpen();
  };

  const [name, setName] = React.useState("");
  const [text, setText] = React.useState("");
  const [img, setImg] = React.useState("");
  


  
  React.useEffect(() => {

    
    getRandomCardName();
  }, [])
  
  
  function getRandomCardName() {
    
    var i = Math.floor(Math.random() * myJson.length)
    setName(myJson[i].Name);
    setText(myJson[i].Text);
    setImg(`../imgs/` + myJson[i].Name.split(' ').join('') + `.png`);    
  }

  
  return (
    <>
    
    <Card sx={{ maxWidth: width, height: 400 }}>
      <CardActionArea onClick={open}>
        <CardMedia
        component="img"
        height="125"
        image={img}
        alt={name}
      />
    
        <CardContent>
          <Typography gutterBottom fontSize="16px" variant="h6" component="div">
            {name}
          </Typography>
          <Typography fontSize="11px" variant="body2" color="text.secondary">
          {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}