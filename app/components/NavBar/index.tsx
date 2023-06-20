'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import DrawerComp from './Drawer';
import { Login } from '@mui/icons-material';
import { VipButton } from './LoginButton';
import { useRouter } from 'next/navigation';
import NightModeToggle from '../NightModeToggle';
import { usePageTabContext } from '@/app/context/PageTabContextProvider';

const NavBar = () => {
  const { setTabValue, tabValue } = usePageTabContext();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const { push } = useRouter();

  const handleCloseNavMenu = (route: string) => {
    setOpenDrawer(false);
    push(route);
  };

  return (
    <React.Fragment>
      <AppBar color='primary' position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography
              onClick={() => handleCloseNavMenu('/')}
              sx={{ fontSize: '2rem', paddingLeft: '10%', cursor: 'pointer' }}
            >
              CheGou
            </Typography>
            {isMatch ? (
              <DrawerComp
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: 'auto' }}
                  indicatorColor='secondary'
                  textColor='inherit'
                  value={tabValue}
                  onChange={(e, value) => setTabValue(value)}
                >
                  <Tab
                    label='RASTREAR'
                    onClick={() => handleCloseNavMenu('/rastrear')}
                  />
                  <Tab
                    label='COTAR'
                    onClick={() => handleCloseNavMenu('/cotar')}
                  />
                  <Tab
                    label='ENVIAR'
                    onClick={() => handleCloseNavMenu('/enviar')}
                  />
                  <Tab
                    label='CONTATE-NOS'
                    onClick={() => handleCloseNavMenu('/contate-nos')}
                  />
                </Tabs>
                <VipButton />
              </>
            )}
            <NightModeToggle />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
