import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Stack> = {
  title: 'MUI/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    spacing: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Stack> = {
  args: {
    direction: 'row',
    spacing: 2,
    children: [
      <Button key="1" variant="contained">Button 1</Button>,
      <Button key="2" variant="outlined">Button 2</Button>,
      <Button key="3" variant="text">Button 3</Button>,
    ],
  },
};

export const Directions: StoryObj<typeof Stack> = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>Row</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Button 1</Button>
          <Button variant="outlined">Button 2</Button>
          <Button variant="text">Button 3</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Column</Typography>
        <Stack direction="column" spacing={2}>
          <Button variant="contained">Button 1</Button>
          <Button variant="outlined">Button 2</Button>
          <Button variant="text">Button 3</Button>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Spacing: StoryObj<typeof Stack> = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>Spacing 1</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="contained">Button 1</Button>
          <Button variant="outlined">Button 2</Button>
          <Button variant="text">Button 3</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Spacing 4</Typography>
        <Stack direction="row" spacing={4}>
          <Button variant="contained">Button 1</Button>
          <Button variant="outlined">Button 2</Button>
          <Button variant="text">Button 3</Button>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Alignments: StoryObj<typeof Stack> = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>Align Start</Typography>
        <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ height: 100, bgcolor: 'grey.100' }}>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="outlined">Medium</Button>
          <Button variant="text" size="large">Large</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Align Center</Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ height: 100, bgcolor: 'grey.100' }}>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="outlined">Medium</Button>
          <Button variant="text" size="large">Large</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Align End</Typography>
        <Stack direction="row" spacing={2} alignItems="flex-end" sx={{ height: 100, bgcolor: 'grey.100' }}>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="outlined">Medium</Button>
          <Button variant="text" size="large">Large</Button>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const JustifyContent: StoryObj<typeof Stack> = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>Space Between</Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ width: '100%', bgcolor: 'grey.100', p: 2 }}>
          <Button variant="contained">Left</Button>
          <Button variant="outlined">Center</Button>
          <Button variant="text">Right</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Center</Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%', bgcolor: 'grey.100', p: 2 }}>
          <Button variant="contained">Button 1</Button>
          <Button variant="outlined">Button 2</Button>
        </Stack>
      </Box>
    </Stack>
  ),
}; 