import type { Meta, StoryObj } from '@storybook/react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';

const meta: Meta<typeof Chip> = {
  title: 'MUI/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Chip> = {
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'default',
    size: 'medium',
  },
};

export const Variants: StoryObj<typeof Chip> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </Stack>
  ),
};

export const Colors: StoryObj<typeof Chip> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
    </Stack>
  ),
};

export const Sizes: StoryObj<typeof Chip> = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" gap={2}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
};

export const WithAvatar: StoryObj<typeof Chip> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip avatar={<Avatar><FaceIcon /></Avatar>} label="With Icon" />
    </Stack>
  ),
};

export const Clickable: StoryObj<typeof Chip> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Chip label="Clickable" onClick={() => {}} />
      <Chip label="Deletable" onDelete={() => {}} />
      <Chip label="Clickable Deletable" onClick={() => {}} onDelete={() => {}} />
    </Stack>
  ),
};

export const Disabled: StoryObj<typeof Chip> = {
  render: () => (
    <Stack spacing={2} direction="row" flexWrap="wrap" gap={2}>
      <Chip label="Disabled" disabled />
      <Chip label="Disabled Outlined" variant="outlined" disabled />
    </Stack>
  ),
}; 