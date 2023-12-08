import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
// material-ui
import { Grid } from '@mui/material';

// project imports
import SuspectsCard from './suspectsCard';
import VideoPlayingCard from './LiveVideo';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8}>
              <VideoPlayingCard isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SuspectsCard isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Dashboard;
