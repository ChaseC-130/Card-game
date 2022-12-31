import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myJson from '../CardIdeas.json';


export default function Cards({handleOpen, setInHand, setViewName, setViewText}) {


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
    
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardActionArea onClick={open}>
        <CardMedia
        component="img"
        height="250"
        image={img}
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