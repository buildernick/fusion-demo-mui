import type { Meta, StoryObj } from '@storybook/react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const meta: Meta<typeof TextField> = {
  title: 'MUI/TextField',
  component: TextField,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof TextField> = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    variant: 'outlined',
    size: 'medium',
  },
};

export const Variants: StoryObj<typeof TextField> = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>
  ),
};

export const Sizes: StoryObj<typeof TextField> = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="flex-start" flexWrap="wrap" gap={2}>
      <TextField label="Small" size="small" />
      <TextField label="Medium" size="medium" />
    </Stack>
  ),
};

export const States: StoryObj<typeof TextField> = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <TextField label="Normal" />
      <TextField label="Required" required />
      <TextField label="Disabled" disabled />
      <TextField label="Error" error helperText="Error message" />
      <TextField label="Success" color="success" />
      <TextField label="With helper text" helperText="Helper text" />
    </Stack>
  ),
};

export const Types: StoryObj<typeof TextField> = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <TextField label="Text" type="text" />
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <TextField label="Number" type="number" />
      <TextField label="Multiline" multiline rows={4} />
    </Stack>
  ),
}; 