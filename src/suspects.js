import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

//import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
//import Typography from '@mui/material/Typography';
import { Text } from '@arwes/react-text';

import { Animator } from '@arwes/react-animator';
//import { FrameSVGKranox, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';

const firebaseConfig = {
  apiKey: 'AIzaSyBHjAkDsX8FqTTzjTuQY1QDhpZLICDBqY0',
  authDomain: 'abl-security-b033d.firebaseapp.com',
  projectId: 'abl-security-b033d',
  storageBucket: 'abl-security-b033d.appspot.com',
  messagingSenderId: '151786772349',
  appId: '1:151786772349:web:c8403bde391b3fb9f11e14',
  measurementId: 'G-S0GH260NF6'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage();

function Suspects() {
  const [suspects, setSuspects] = useState([]);
  const [selectedSuspect, setSelectedSuspect] = useState(null); // State for selected suspect
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const suspectsCollection = collection(db, 'Suspects');
        const querySnapshot = await getDocs(suspectsCollection);
        const data = [];

        // Define a function to fetch and process the image URL
        const getImageUrl = async (suspectData) => {
          try {
            const url = await getDownloadURL(ref(storage, `images/${suspectData.Name}.jpg`));
            //console.log(url);
            return url;
          } catch (error) {
            console.error('Error fetching suspect image URL: ', error);
            return null;
          }
        };

        // Use Promise.all to fetch all image URLs concurrently
        const imageUrlPromises = querySnapshot.docs.map((doc) => getImageUrl(doc.data()));

        const imageUrls = await Promise.all(imageUrlPromises);
        console.log(imageUrls);

        for (let i = 0; i < querySnapshot.docs.length; i++) {
          const doc = querySnapshot.docs[i];
          const suspectData = doc.data();

          data.push({
            id: doc.id,
            ...suspectData,
            imageUrl: imageUrls[i] // Assign the corresponding image URL
          });
        }

        // Sort the suspects by date and time in descending order
        data.sort((a, b) => {
          const dateA = a.Date.split(' ').reverse().join('-');
          const dateB = b.Date.split(' ').reverse().join('-');
          const timeA = a.Time;
          const timeB = b.Time;

          const dateTimeA = new Date(`${dateA}T${timeA}`);
          const dateTimeB = new Date(`${dateB}T${timeB}`);

          return dateTimeB - dateTimeA;
        });

        setSuspects(data);
      } catch (error) {
        console.error('Error fetching suspects: ', error);
      }
    };

    fetchData(); // Initial data fetch

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 10 seconds
    }, 100000000000000000000000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleSuspectClick = (suspect) => {
    setSelectedSuspect(suspect);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedSuspect(null);
    setIsDialogOpen(false);
  };

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {suspects.slice(0, 2).map((suspect) => (
          <React.Fragment key={suspect.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 2,
                px: 2, // Adjust vertical padding as needed
                cursor: 'pointer' // Add cursor pointer to indicate clickability
              }}
              onClick={() => handleSuspectClick(suspect)} // Handle click event
            >
              {/* Display details */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <ListItemText
                    secondary={
                      <Box>
                        <Typography component="span" variant="body2" color="textPrimary">
                          Name: {suspect.Name}
                        </Typography>
                        <Typography component="span" variant="body2" color="textSecondary">
                          <br />
                          Date: {suspect.Date}
                        </Typography>
                        <Typography component="span" variant="body2" color="textSecondary">
                          <br />
                          Time: {suspect.Time}
                        </Typography>
                        <Typography component="span" variant="body2" color="textSecondary">
                          <br />
                          Severity: {suspect.Severity}
                        </Typography>
                      </Box>
                    }
                    sx={{ mt: 1 }} // Adjust top margin as needed
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      alt={suspect.Name}
                      src={suspect.imageUrl}
                      sx={{
                        width: '100px', // Adjust the width to make it larger
                        height: '100px', // Set the height to match the width for a square shape
                        variant: 'square'
                      }}
                    />
                  </ListItemAvatar>
                </Grid>
              </Grid>
            </ListItem>
            {suspects.indexOf(suspect) < suspects.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>

      {/* Dialog for displaying suspect details */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{ style: { background: 'rgba(128, 128, 128, 0.7)', borderRadius: '8px', padding: '16px' } }}
      >
        <DialogTitle color="white">Suspect Details</DialogTitle>
        <DialogContent
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {selectedSuspect && (
            <>
              <img
                src={selectedSuspect.imageUrl}
                alt={selectedSuspect.Name}
                style={{ width: '200px', height: '200px', borderRadius: '8px', marginRight: '16px', boxShadow: '0px 0px 10px #000000' }}
              />
              <div>
                <Animator>
                  <Text style={{ color: '#fff', fontFamily: 'orbitron' }} manager="decipher" easing="outSine" fixed>
                    Name : {selectedSuspect.Name}
                  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'Orbitron' }} manager="decipher" easing="outSine" fixed>
                    Gender : Male
                  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'Orbitron' }} manager="decipher" easing="outSine" fixed>
                    Severity : High
                  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'Orbitron' }} manager="decipher" easing="outSine" fixed>
                    Last Viewed : {selectedSuspect.Date} at {selectedSuspect.Time}
                  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'Orbitron' }} manager="decipher" easing="outSine" fixed>
                    Crimes : {selectedSuspect.Crimes}
                  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'Orbitron' }} manager="decipher" easing="outSine" fixed>
                    Warrant Issued : YES
                  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'Orbitron' }} manager="decipher" easing="outSine" fixed>
                    Log : {selectedSuspect.Log}
                  </Text>
                </Animator>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Suspects;
