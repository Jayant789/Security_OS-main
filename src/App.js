import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
//import logo from './logo.svg';
//import './App.css';
import './firebase.js';
import { useState, useEffect } from 'react';
//import {Button, Row, Col, Toast} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { getTokenAndUpdate, onMessageListener } from './firebase.js';

//import DrawerAppBar from './appbar';
//import Suspects from './suspects';

// ==============================|| APP ||============================== //

function App() {
  const customization = useSelector((state) => state.customization);

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    // Call your getToken function here and update isTokenFound accordingly.
    getTokenAndUpdate(setTokenFound)
      .then(() => {
        console.log(notification);
        console.log(isTokenFound);
        console.log(show);
        // Token retrieval successful.
        // You can optionally perform any other actions here.
      })
      .catch((err) => {
        // Handle errors from getToken.
        console.error('Error while getting token:', err);
      });
  }, [isTokenFound, notification, show]);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({ title: payload.notification.title, body: payload.notification.body });
      console.log(payload);
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
