import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myJson from '../CardIdeas.json';
import { useEffect } from 'react';


export default function EmptyCard() {


  
  return (
    <>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image=""
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}