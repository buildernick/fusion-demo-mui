import type { Meta, StoryObj } from '@storybook/react';
import Copyright from './Copyright';

const meta: Meta<typeof Copyright> = {
  title: 'Dashboard/Copyright',
  component: Copyright,
};
export default meta;

export const Default: StoryObj<typeof Copyright> = {
  render: () => <Copyright />,
}; 