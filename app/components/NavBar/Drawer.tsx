import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const pages = [
  {
    title: 'RASTREAR',
    link: '/rastrear',
  },
  {
    title: 'COTAR',
    link: '/cotar',
  },
  {
    title: 'ENVIAR',
    link: '/enviar',
  },
  {
    title: 'CONTATE-NOS',
    link: '/contate-nos',
  },
];

const DrawerComp = ({ openDrawer, setOpenDrawer, handleCloseNavMenu }: any) => {
  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              onClick={() => handleCloseNavMenu(page.link)}
              key={index}
            >
              <ListItemIcon>
                <ListItemText>{page.title}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color='inherit' />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
