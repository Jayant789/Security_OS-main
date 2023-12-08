/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import SuspectsBoard from './suspectboard';

import { gridSpacing } from 'store/constant';

// ==============================|| Suspects Page ||============================== //

const Suspects = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={13}>
        <SuspectsBoard isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default Suspects;
