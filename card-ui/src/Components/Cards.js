import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myJson from './CardIdeas.json';
import { useEffect } from 'react';


export default function Cards({handleOpen, setInHand, setViewName, setViewText}) {


  function open() {
    setInHand(true);
    setViewName(name);
    setViewText(text);
    handleOpen();
  };

  const [name, setName] = React.useState("");
  const [text, setText] = React.useState("");
  
  React.useEffect(() => {
    getRandomCardName();
  }, [])
  

  function getRandomCardName() {
    var i = Math.floor(Math.random() * myJson.length)
    setName(myJson[i].Name);
    setText(myJson[i].Text);
  }
  
  return (
    <>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={open}>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}