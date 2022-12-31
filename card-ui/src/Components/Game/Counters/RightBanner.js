import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import YourCounter from './YourCounter';
import OpponentCounter from './OpponentCounter';
import Divider from '@mui/material/Divider';



const drawerWidth = 240;

export default function RightBanner({}) {

    const [history, setHistory] = React.useState([]);


   

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
        anchor="right"
      >
        <List>
          
        <OpponentCounter />
        <YourCounter />
        </List>
        
      </Drawer>
      
    </Box>
  );
}