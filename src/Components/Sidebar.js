import React, { useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('MY MOVES');
  const theme = useTheme();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getActiveStyles = (tabName) => {
    return tabName === activeTab
      ? { backgroundColor: '#f0f0f0', fontWeight: 'bold', borderLeft: `4px solid ${theme.palette.primary.main}` }
      : {};
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem button onClick={() => handleTabClick('MY MOVES')} sx={getActiveStyles('MY MOVES')}>
        <LocalShippingIcon sx={{ mr: '5px' }} />
        <Typography sx={{ fontSize: '13px' }}>MY MOVES</Typography>
      </ListItem>
      <ListItem button onClick={() => handleTabClick('MY PROFILE')} sx={getActiveStyles('MY PROFILE')}>
        <PersonIcon />
        <Typography sx={{ fontSize: '13px' }}>MY PROFILE</Typography>
      </ListItem>
      <ListItem button onClick={() => handleTabClick('GET QUOTE')} sx={getActiveStyles('GET QUOTE')}>
        <CalculateTwoToneIcon />
        <Typography sx={{ fontSize: '13px' }}>GET QUOTE</Typography>
      </ListItem>
      <ListItem button onClick={() => handleTabClick('LOGOUT')} sx={getActiveStyles('LOGOUT')}>
        <CopyrightTwoToneIcon />
        <Typography sx={{ fontSize: '13px' }}>LOGOUT</Typography>
      </ListItem>
    </List>
  );
}

export default Sidebar;
