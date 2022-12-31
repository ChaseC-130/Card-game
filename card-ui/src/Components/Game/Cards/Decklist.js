import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import myJson from '../CardIdeas.json';
import ViewCard from './ViewCard';


const drawerWidth = 240;

export default function Decklist({setText, setName, handleOpen, setInHand}) {

    const [deck, setDeck] = React.useState([]);
  
    function open(text, name) {
        setText(text);
        setName(name);
        setInHand(false);
        handleOpen();
    };

    React.useEffect(() => {
        getCards();
    }, [])

    function getCards() {
        setDeck([]);
        for (let i = 0; i < myJson.length; i++) {
            setDeck(prevArr => [...prevArr, <ListItem onClick={() => open(myJson[i].Text, myJson[i].Name)} key={myJson[i].Name} disablePadding>
            <ListItemButton >
            <ListItemText primary={myJson[i].Name} />
            </ListItemButton>
          </ListItem>]);
        }
        for (let i = 0; i < myJson.length; i++) {
            setDeck(prevArr => [...prevArr, <ListItem onClick={() => open(myJson[i].Text, myJson[i].Name)} key={myJson[i].Name} disablePadding>
            <ListItemButton >
            <ListItemText primary={myJson[i].Name} />
            </ListItemButton>
          </ListItem>]);
        }
        for (let i = 0; i < myJson.length; i++) {
            setDeck(prevArr => [...prevArr, <ListItem onClick={() => open(myJson[i].Text, myJson[i].Name)} key={myJson[i].Name} disablePadding>
            <ListItemButton >
            <ListItemText primary={myJson[i].Name} />
            </ListItemButton>
          </ListItem>]);
        }
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
            <Typography sx={{fontSize: 18, mb: 2}}>Deck</Typography>
            <Typography sx={{fontSize: 18, mb: 2}}>Cards Remaining: {deck.length}</Typography>
          {deck}
        </List>
        <Divider />
      </Drawer>
      
    </Box>
  );
}