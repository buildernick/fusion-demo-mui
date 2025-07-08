import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const meta: Meta<typeof Button> = {
  title: 'MUI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
  },
};

export const Variants: StoryObj<typeof Button> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </Stack>
  ),
};

export const Colors: StoryObj<typeof Button> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="warning">Warning</Button>
    </Stack>
  ),
};

export const Sizes: StoryObj<typeof Button> = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Stack>
  ),
};

export const Disabled: StoryObj<typeof Button> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Button disabled variant="text">Text</Button>
      <Button disabled variant="outlined">Outlined</Button>
      <Button disabled variant="contained">Contained</Button>
    </Stack>
  ),
}; 