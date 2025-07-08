import type { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Grid> = {
  title: 'MUI/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Default: StoryObj<typeof Grid> = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Grid Item 1</Typography>
          <Typography>xs=12 md=6 lg=4</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Grid Item 2</Typography>
          <Typography>xs=12 md=6 lg=4</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Grid Item 3</Typography>
          <Typography>xs=12 md=12 lg=4</Typography>
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const Responsive: StoryObj<typeof Grid> = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          xs=12 sm=6 md=4 lg=3
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
          xs=12 sm=6 md=4 lg=3
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
          xs=12 sm=6 md=4 lg=3
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'warning.light', color: 'warning.contrastText' }}>
          xs=12 sm=6 md=4 lg=3
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const AutoSizing: StoryObj<typeof Grid> = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          Auto Size
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
          Auto Size
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
          Auto Size
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const Nested: StoryObj<typeof Grid> = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          Main Content (md=8)
          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Paper sx={{ p: 1, textAlign: 'center', bgcolor: 'white', color: 'black' }}>
                Nested 1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 1, textAlign: 'center', bgcolor: 'white', color: 'black' }}>
                Nested 2
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
          Sidebar (md=4)
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const Alignment: StoryObj<typeof Grid> = {
  render: () => (
    <Grid container spacing={2} sx={{ height: 200, bgcolor: 'grey.100' }}>
      <Grid item xs={4}>
        <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', alignItems: 'flex-start' }}>
          Top Aligned
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center' }}>
          Center Aligned
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
          Bottom Aligned
        </Paper>
      </Grid>
    </Grid>
  ),
}; 