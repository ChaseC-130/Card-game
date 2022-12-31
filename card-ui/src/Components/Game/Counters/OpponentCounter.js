import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function OpponentCounter() {



    const [tutors, setTutors] = React.useState(0);
    const [draw, setDraw] = React.useState(0);
    const [tutorCost, setTutorCost] = React.useState(2);

return (
    <Box>
        <ListItem>
            <Button variant="contained">Exhaustion</Button>
        </ListItem>
    <ListItem disablePadding>
    <ListItemButton >        
        <ListItemText primary="Total Tutors: ">{tutors}</ListItemText>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton >        
        <ListItemText primary="Total Draws: ">{draw}</ListItemText>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton >        
        <ListItemText primary="Current Tutuor Cost: ">{tutorCost}</ListItemText>
    </ListItemButton>
    </ListItem>
    </Box>
)

}
