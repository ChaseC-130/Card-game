import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function EndTurn({yourTurn = false}) {



return (
    <Box>
        <ListItem>
    <ListItemButton >        
    {yourTurn ? <Button variant="contained">End Turn</Button> : <Button variant="contained">Opponent's Turn</Button>}
    </ListItemButton>
    </ListItem>
    </Box>
)

}
