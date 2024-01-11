import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Typography, LinearProgress } from '@mui/material';

const status = [
  {
    value: 'FR',
    label: 'Face Recognition'
  },
  {
    value: 'SD',
    label: 'Spill Detection'
  },
  {
    value: 'ANPR',
    label: 'Number Plate Recognition'
  }
];

const cameras = [
  {
    value: '0',
    label: 'Camera 1'
  },
  {
    value: '1',
    label: 'Camera 2'
  }
  // Add more cameras as needed
];

const VideoPlayingCard = ({ isLoading }) => {
  const [modelType, setModelType] = useState('FR');
  const [cameraValue, setCameraValue] = useState('0');
  const [loading, setLoading] = useState(isLoading);

  const selectedModel = status.find((option) => option.value === modelType);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    // Handle error if needed
  };

  const handleSelectChange = (e) => {
    setLoading(true); // Set loading to true when a new model is selected
    setModelType(e.target.value);
  };

  const handleCameraChange = (e) => {
    setLoading(true); // Set loading to true when a new camera is selected
    setCameraValue(e.target.value);
  };

  useEffect(() => {
    // Set a timeout to automatically hide the loading bar after 5 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clear the timeout when the component is unmounted or when loading state changes
    return () => clearTimeout(timeoutId);
  }, [loading]);

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="subtitle2">Live Video</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3">{selectedModel ? selectedModel.label : ''}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField id="select-model" select value={modelType} onChange={handleSelectChange}>
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField id="camera-select" select value={cameraValue} onChange={handleCameraChange}>
              {cameras.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {loading && <LinearProgress />} {/* Show loading bar if loading is true */}
        <iframe
          title="Video Player"
          width="100%"
          height="400"
          src={`http://127.0.0.1:8000/video_feed?camera=${cameraValue}&model=${modelType}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
        ></iframe>
      </Grid>
    </Grid>
  );
};

VideoPlayingCard.propTypes = {
  isLoading: PropTypes.bool
};

export default VideoPlayingCard;
