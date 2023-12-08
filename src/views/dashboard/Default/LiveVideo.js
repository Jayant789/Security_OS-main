import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

const status = [
  {
    value: 'FR',
    label: 'Face Recognition'
  },
  {
    value: 'SD',
    label: 'Spill Detection'
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

const VideoPlayingCard = () => {
  const [modelType, setModelType] = useState('FR');
  const [cameraValue, setCameraValue] = useState('0');
  const videoUrl = `http://127.0.0.1:8000/video_feed?camera=${cameraValue}&model=${modelType}`;

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
                <Typography variant="h3">{modelType}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField id="select-model" select value={modelType} onChange={(e) => setModelType(e.target.value)}>
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField id="camera-select" select value={cameraValue} onChange={(e) => setCameraValue(e.target.value)}>
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
        <iframe
          title="Video Player"
          width="100%"
          height="400"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
    </Grid>
  );
};

VideoPlayingCard.propTypes = {
  isLoading: PropTypes.bool
};

export default VideoPlayingCard;
