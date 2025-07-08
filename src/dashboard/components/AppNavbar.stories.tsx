import type { Meta, StoryObj } from '@storybook/react';
import AppNavbar from './AppNavbar';

const meta: Meta<typeof AppNavbar> = {
  title: 'Dashboard/AppNavbar',
  component: AppNavbar,
};
export default meta;

export const Default: StoryObj<typeof AppNavbar> = {
  render: () => <AppNavbar />,
}; 