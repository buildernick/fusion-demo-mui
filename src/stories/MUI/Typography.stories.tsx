import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const meta: Meta<typeof Typography> = {
  title: 'MUI/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'text.primary', 'text.secondary'],
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Typography> = {
  args: {
    children: 'Typography',
    variant: 'body1',
  },
};

export const Variants: StoryObj<typeof Typography> = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
      <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
      <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
      <Typography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
      <Typography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
      <Typography variant="button">button text</Typography>
      <Typography variant="caption">caption text</Typography>
      <Typography variant="overline">overline text</Typography>
    </Stack>
  ),
};

export const Colors: StoryObj<typeof Typography> = {
  render: () => (
    <Stack spacing={2}>
      <Typography color="primary">Primary color</Typography>
      <Typography color="secondary">Secondary color</Typography>
      <Typography color="error">Error color</Typography>
      <Typography color="warning">Warning color</Typography>
      <Typography color="info">Info color</Typography>
      <Typography color="success">Success color</Typography>
      <Typography color="text.primary">Text primary</Typography>
      <Typography color="text.secondary">Text secondary</Typography>
    </Stack>
  ),
}; 